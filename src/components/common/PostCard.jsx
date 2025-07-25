import React from 'react'
import colorSchema from '../../colors/colorSchema'
import PostDetails from './PostDetails'

export default function PostCard({tag , title , posterimage , postername , postdate , blogImage}) {
    const color = colorSchema()
  return (
    <div className='p-4 shadow-lg border border-gray-50/5 rounded-[10px] cursor-pointer    '>
        
        {/* blogImage */}
        {blogImage ? <img src={blogImage} alt='blogImage' className='w-full h-60 object-cover rounded-[10px]    ' /> : <div style={{background: color.bgsecondary}} className='w-full h-60 rounded-[10px] '></div>}


        {/* post details */}
        <PostDetails className='mt-6' tag={tag} title={title} posterimage={posterimage} postername={postername} postdate={postdate} />

    </div>
  )
}
