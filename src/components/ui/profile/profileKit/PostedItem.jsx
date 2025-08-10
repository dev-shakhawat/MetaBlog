import React, { useEffect, useRef, useState } from 'react'
import colorSchema from '../../../../colors/colorSchema'
import convertToBangladeshTime from '../../../../helpers/timeConverter';
import { useNavigate } from 'react-router';
 

// redux
import { useDispatch, useSelector } from 'react-redux';
import { addtoSelectedItems } from '../../../../redux/slices/postSlice';


// icons 
import { GoCircle } from "react-icons/go";
import { GoCheckCircle } from "react-icons/go";
import { RxDragHandleDots2 } from "react-icons/rx";
import PostMore from './PostMore';

export default function PostedItem({data}) {

    const color  = colorSchema();
    const navigate = useNavigate()
    const selectedAll = useSelector((state) => state.post.selectall); 
    const selectedItems = useSelector((state) => state.post.seledtedItems);
    const dispatch = useDispatch();
    const postMoreRef = useRef(null);
    const [isopenpostmore , setIsopenpostmore] = useState(false);

    const handleRemoveFromSelectedItems = (e , id) => {
      e.stopPropagation();

      if(selectedItems.filter((item) => item === id).length > 0){
        const updatedSelectedItems = selectedItems.filter((item) => item !== id);
        dispatch(addtoSelectedItems(updatedSelectedItems));
      }
      else{
        const updatedSelectedItems = [...selectedItems, id];
        dispatch(addtoSelectedItems(updatedSelectedItems));
      }
    };

    const handleMore = (e) => {
      e.stopPropagation();
      setIsopenpostmore(prev => !prev);
    };

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (postMoreRef.current && !postMoreRef.current.contains(event.target)) {
          setIsopenpostmore(false);
        }
      };
      document.addEventListener('click', handleClickOutside);
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    })
    
    
    
  return (
    <div onClick={() => navigate(`/blogs/${data?.slug}`)} style={{background: color.bgsecondary}} className=' cursor-pointer p-2 rounded-[5px]  '>
        
        {/* category and time and more */}
        <div ref={postMoreRef} className="flex justify-between items-center relative  ">
          <p   className=" font-work-sans font-semibold text-sm leading-5 capitalize py-1 px-2.5 rounded-[5px] w-fit bg-[#4B6BFB]/80 text-white   ">{data?.category}</p>
 
          <p style={{color: color.textprimary}} className=" text-sm   ">{convertToBangladeshTime(data?.publishedAt)}</p>
          
          <button  style={{color: color.textprimary}} onClick={(e) => handleMore(e)} type="button" className='text-[22px] cursor-pointer '><RxDragHandleDots2/></button>

          {isopenpostmore && <PostMore postID={data?._id} setIsopenpostmore={setIsopenpostmore}  />}

        </div>

        {/* title */}
        <h2 style={{color: color.textprimary}} className=" font-work-sans font-semibold text-lg leading-6 mt-3   flex items-center      ">
          {selectedAll && <button onClick={(e) => handleRemoveFromSelectedItems(e , data?._id)} type="button" className='mr-2'>

            {selectedItems.filter((item) => item === data?._id).length > 0 ? <GoCheckCircle className='text-[22px]'/> : <GoCircle className='text-[22px]'/>}
            
          </button>}
          <span className='text-ellipsis  line-clamp-2'>{data?.title}</span>
        </h2>

        {/* description */}
        <p style={{color: color.textsecondary}} className=" font-work-sans font-medium text-sm leading-5 mt-2 line-clamp-3 text-ellipsis     ">{data?.description}</p>


        {/* image */}
        <img src={data?.featuredImage} alt={'image'} className=' w-full h-60 rounded-[5px] object-cover mt-5     ' />
    </div>
  )
}
