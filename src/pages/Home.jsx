import React from 'react'
import Container from '../components/common/Container'

// components
import Banner from '../components/ui/banner/Banner'
import LatestPost from '../components/ui/latestpost/LatestPost'  

export default function Home() {
  return (
    <Container>

      {/* banner */}
      <Banner/> 

      {/* latest post */}
      <LatestPost/>
      
    </Container>
  )
}
