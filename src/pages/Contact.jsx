import React from 'react'
import ContactBanner from '../components/ui/contact/banner/ContactBanner'
import Form from '../components/ui/contact/form/Form'
import ContactHead from '../components/ui/contact/ContactHead'
import Container from '../components/common/Container'
import SideContact from '../components/ui/contact/SideContact'

export default function Contact() {
  return (
    <div className='pt-30    '>
      
      {/* contact banner */}
      {/* <ContactBanner/> */}

      {/* contact head */}
      <ContactHead/>

      <Container>
        <div className="flex items-center gap-25 mt-10   ">
          <Form/>

          <SideContact/>
        </div>
      </Container>


    </div>
  )
}
