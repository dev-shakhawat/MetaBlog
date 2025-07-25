import React from 'react'
import Container from '../components/common/Container'
import Banner from '../components/ui/banner/Banner'
import PostDetails from '../components/common/PostDetails'
import BlogBanner from '../components/ui/blogBanner/BlogBanner'
import PostCard from '../components/common/PostCard'

export default function Blogs() {
  return (
    <div className='pt-30'>
      <Container>

        {/* blog banner */}
        <BlogBanner tag="technology" title={`The Impact of Technology on the Workplace: How Technology is Changing` } postername="John Doe" postdate="March 12, 2023"  />


        {/* all blogs */}
        <div className="grid grid-cols-3 gap-3 mt-10  ">

          {Array(9).fill(0).map((item, index) => {
              return  <PostCard key={index} postername={`John Doe`} postdate={`March 12, 2023`} tag={`technology`} title={`The Impact of Technology on the Workplace: How Technology is Changing`}    />
          })}

        </div>




      </Container>
    </div>
  )
}
