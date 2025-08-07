import React from 'react'
import colorSchema from '../../colors/colorSchema'
import PostDetails from './PostDetails'
import { useNavigate } from 'react-router'

export default function PostCard({tag , title , posterimage , postername , postdate , blogImage , postId , description}) {
    const color = colorSchema()
    const navigate = useNavigate()
    
  return (
    <div onClick={() =>  navigate(`/blogs/${postId}`)} className='p-4 shadow-lg border border-gray-50/5 rounded-[10px] cursor-pointer    '>
        
        {/* blogImage */}
        {blogImage ? <img src={`http://${blogImage}`} alt='blogImage' className='w-full 2xl:h-60 xl:h-50 lg:h-40 md:h-36 sm:h-32 h-28  object-cover rounded-[10px]    ' /> : <div style={{background: color.bgsecondary}} className='w-full h-60 rounded-[10px] '></div>}

        {/* post details */}
        <PostDetails className='md:mt-6 mt-2' description={description} tag={tag} title={title} posterimage={posterimage} postername={postername} postdate={postdate} />

    </div>
  )
}
