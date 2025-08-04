import React from 'react'
import colorSchema from '../../../../colors/colorSchema'
import convertToBangladeshTime from '../../../../helpers/timeConverter';
import { useNavigate } from 'react-router';
 

// redux
import { addtoSelectedItems } from '../../../../redux/slices/postSlice';


// icons 
import { useDispatch, useSelector } from 'react-redux';
import { GoCircle } from "react-icons/go";
import { GoCheckCircle } from "react-icons/go";

export default function PostedItem({data}) {

    const color  = colorSchema();
    const navigate = useNavigate()
    const selectedAll = useSelector((state) => state.post.selectall); 
    const selectedItems = useSelector((state) => state.post.seledtedItems);
    const dispatch = useDispatch();

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
    
    
    
  return (
    <div onClick={() => navigate(`/blogs/${data?.slug}`)} style={{background: color.bgsecondary}} className=' cursor-pointer p-2 rounded-[5px]  '>
        
        {/* category and time */}
        <div className="flex justify-between items-center  ">
          <p   className=" font-work-sans font-semibold text-sm leading-5 capitalize py-1 px-2.5 rounded-[5px] w-fit bg-[#4B6BFB]/80 text-white   ">{data?.category}</p>
 
          <p style={{color: color.textprimary}} className=" text-sm   ">{convertToBangladeshTime(data?.publishedAt)}</p>

        </div>

        {/* title */}
        <h2 style={{color: color.textprimary}} className=" font-work-sans font-semibold text-lg leading-6 mt-3 line-clamp-2 text-ellipsis flex items-center      ">
          {selectedAll && <button onClick={(e) => handleRemoveFromSelectedItems(e , data?._id)} type="button" className='mr-2'>

            {selectedItems.filter((item) => item === data?._id).length > 0 ? <GoCheckCircle className='text-[22px]'/> : <GoCircle className='text-[22px]'/>}
            
          </button>}
          <span>{data?.title}</span>
        </h2>

        {/* description */}
        <p style={{color: color.textsecondary}} className=" font-work-sans font-medium text-sm leading-5 mt-2 line-clamp-3 text-ellipsis     ">{data?.description}</p>


        {/* image */}
        <img src={`http://${data?.featuredImage}`} alt={'image'} className=' w-full h-60 rounded-[5px] object-cover mt-5     ' />
    </div>
  )
}
