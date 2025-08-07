import React, { useEffect, useState } from 'react'
import colorSchema from '../../../colors/colorSchema'
import PostCard from '../../common/PostCard'
import { Link } from 'react-router'

export default function LatestPost() {

    const color = colorSchema()
    const [allPosts, setAllPosts] = useState([]);

    useEffect(() => { 

        fetch('https://meta-blog-backend.onrender.com/post/getAllPost')
        .then(response => response.json())
        .then(data => {
            setAllPosts(data.data)
        })

      }, []);
 
      
 

  return (
    <div className=' pt-40   '>
        
        <h2 style={{color: color.textprimary}}  className='font-work-sans font-bold text-[24px] leading-7   '>Latest Post</h2>


 
        {/* latest post */}
        <div className="grid grid-cols-3 gap-3 mt-10  ">

            { allPosts.length > 0 &&  allPosts.map((item, index) => {
                return  <PostCard postId={item.slug} key={index} postername={item.author.displayName} postdate={item.publishedAt} tag={item.category} title={item.title}    blogImage={item.featuredImage} posterimage={item.author.photoURL}    />
            })}

        </div>

        {/* button load */}
        <div className="flex justify-center mt-10">
            <Link style={{color: color.textprimary}} to={`/blogs`} type="button" className=' py-3 px-5 rounded-[6px] border-2 border-gray-200 font-work-sans font-medium text-base leading-6   ' >View All Post</Link>
        </div>

    </div>
  )
}
