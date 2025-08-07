import React, { useEffect, useState } from 'react'
import Container from '../components/common/Container'
import Banner from '../components/ui/banner/Banner'
import PostDetails from '../components/common/PostDetails'
import BlogBanner from '../components/ui/blogBanner/BlogBanner'
import PostCard from '../components/common/PostCard'

export default function Blogs() {


  const [allblogs, setAllblogs] = useState([]);

  useEffect(() => { 

      fetch('https://meta-blog-backend.onrender.com/getAllPost')
      .then(response => response.json())
      .then(data => {
        setAllblogs(data.data)
      })

    }, []);


  return (
    <div className='pt-30'>
      <Container>

        {/* blog banner */}
        <BlogBanner tag="technology" title={`The Impact of Technology on the Workplace: How Technology is Changing` } postername="John Doe" postdate="March 12, 2023"  />


        {/* all blogs */}
        <div className="grid grid-cols-3 gap-3 mt-10  ">

          {allblogs.length > 0 && allblogs.map((item, index) => {
              return  <PostCard postId={item.slug} key={index} postername={item.author.displayName} postdate={item.publishedAt} tag={item.category} title={item.title}    blogImage={item.featuredImage} posterimage={item.author.photoURL}    />
          })}

        </div>




      </Container>
    </div>
  )
}
