import React, { useEffect, useRef, useState } from 'react'
import Container from '../components/common/Container'
import { useParams } from 'react-router';
import colorSchema from '../colors/colorSchema';

// icons
import { SlLike } from "react-icons/sl";
import { FaRegComment } from "react-icons/fa6";
import { TbDots } from "react-icons/tb";
import More from '../components/ui/postDeatils/More';

export default function Details({}) {

  const { id } = useParams();
  const [post , setPost] = useState({});
  const color = colorSchema();
  const moreRef = useRef();
  const [openMore, setOpenMore] = useState(false);
  
  useEffect(() => {
    
    fetch(`${import.meta.env.VITE_BASE_URL}/post/getSinglePost/${id}`)
    .then(response => response.json())
    .then(data => setPost(data.data))
    .catch(error => console.error(error));
  }, [])
  
  useEffect(() => { 
    const handleClickOutside = (event) => {
      if (moreRef.current && !moreRef.current.contains(event.target)) {
        setOpenMore(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
 

  return (
    <div className='2xl:pt-35 xl:pt-30 lg:pt-25 md:pt-20 sm:pt-15 pt-13 px-1     '>
      
      <Container>

        {/* title */}
        <h2 style={{color: color.textprimary , whiteSpace: 'pre-line' }} className=" font-libertinus-math font-bold md:text-[40px] text-3xl leading-10 ">"{post?.title}"</h2>
        
        {/* author information */}
        <div className="flex items-center gap-5 xl:mt-5 lg:mt-4 md:mt-3 sm:mt-2 mt-1 py-5   ">

          {/* poster pic */}
          <img src={post?.author?.photoURL} alt="poster" className=' w-9 h-9 rounded-full    ' />

          {/* poster name */}
          <p style={{color: color.textsecondary}} className=" font-work-sans font-medium text-base leading-6   ">{post?.author?.displayName}</p>
          
          {/* poster date */}
          <p style={{color: color.textsecondary}} className="">{post?.publishedAt}</p>
      
        </div>

        {/* content count */}
        <div className="flex justify-between px-10 py-2 border-t border-b border-blue-100 relative ">

          {/* like count */}
          <button style={{color: color.textsecondary}} type="button" className='cursor-pointer'><SlLike/></button>

          {/* comment */}
          <button style={{color: color.textsecondary}} type="button" className='cursor-pointer'><FaRegComment/></button>

          {/* more */}
          <div ref={moreRef} className=" ">

            {/* dots */}
            <button onClick={() => setOpenMore(prev => !prev)} style={{color: color.textsecondary}} type="button" className='cursor-pointer'><TbDots/></button>
            
            {openMore && <More className={`top-7 right-2`} posterId={post?.author?._id} postID={post?._id} />}
          </div>

        </div>


        {/* image */}
        <img src={post?.featuredImage} alt={'image'} className=' md:w-1/2 h-60 sm:h-80 md:h-100 lg:h-120 w-full  rounded-[5px] object-cover mt-5     ' />


        {/* description */}
        <p style={{color: color.textsecondary , whiteSpace: 'pre-line' }} className=" font-work-sans font-medium text-sm leading-5 mt-5  text-ellipsis     ">{post?.description}</p>

      </Container>
    </div>
  )
}
