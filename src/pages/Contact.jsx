import React from 'react'
import ContactBanner from '../components/ui/contact/banner/ContactBanner'
import Form from '../components/ui/contact/form/Form'
import ContactHead from '../components/ui/contact/ContactHead'
import Container from '../components/common/Container'
import SideContact from '../components/ui/contact/SideContact'

export default function Contact() {
  return (
    <div className='xl:pt-30 lg:pt-20 md:pt-15 sm:pt-10 pt-8    '>
      
      {/* contact banner */}
      {/* <ContactBanner/> */}

      {/* contact head */}
      <ContactHead/>

      <Container>
        <div className="flex flex-col-reverse lg:flex-row items-center gap-25 mt-10   ">
          <Form/>

          <SideContact/>
        </div>
      </Container>


    </div>
  )
}
