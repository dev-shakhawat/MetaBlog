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
    
    fetch(`http://localhost:3000/post/getSinglePost/${id}`)
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
    <div className='pt-35     '>
      
      <Container>

        {/* title */}
        <h2 style={{color: color.textprimary , whiteSpace: 'pre-line' }} className=" font-libertinus-math font-bold text-[40px] leading-10 ">"{post?.title}"</h2>
        
        {/* author information */}
        <div className="flex items-center gap-5 mt-5 py-5   ">

          {/* poster pic */}
          <img src={`http://${post?.author?.photoURL}`} alt="poster" className=' w-9 h-9 rounded-full    ' />

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
            
            {openMore && <More className={`top-7 right-2`} posterId={post?.author?._id} />}
          </div>

        </div>


        {/* image */}
        <img src={`http://${post?.featuredImage}`} alt={'image'} className=' w-1/2  rounded-[5px] object-cover mt-5     ' />


        {/* description */}
        <p style={{color: color.textsecondary , whiteSpace: 'pre-line' }} className=" font-work-sans font-medium text-sm leading-5 mt-5  text-ellipsis     ">{post?.description}</p>

      </Container>
    </div>
  )
}
