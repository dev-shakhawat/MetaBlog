import React from 'react'
import { Link } from 'react-router'
import colorSchema from '../../../colors/colorSchema'

export default function NavLinks() {

  const allnavs = [
    {name: "Home", ref: "/"},
    {name: "Blogs", ref: "/blogs"},
    {name: "Single Post", },
    {name: "Contact", ref: "/contact"},
    {name: "Login", ref: "/auth"}, 
  ]

  const color = colorSchema()


  return (
    <div className='flex-2 flex items-center   gap-10  '>
       
       {allnavs.map((item, index) => {
        return (
          <Link style={{color: color.textprimary}} to={item.ref} className='flex gap-2 items-center font-work-sans font-normal text-base leading-6   ' key={index}  >{item.name}</Link>
        )
       })}
    </div>
  )
}
