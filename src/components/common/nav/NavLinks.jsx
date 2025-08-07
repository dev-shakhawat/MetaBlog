import React from 'react'
import { Link, useLocation } from 'react-router'
import colorSchema from '../../../colors/colorSchema'

export default function NavLinks() {

  const allnavs = [
    {name: "Home", ref: "/"},
    {name: "Blogs", ref: "/blogs"},
    {name: "Contact us", ref: "/contact"},
    {name: "Get start", ref: "/auth"}, 
  ]

  const color = colorSchema()
  const location = useLocation();


  return (
    <div className='md:flex-2 flex items-center   2xl:gap-10 xl:gap-8 lg:gap-6 md:gap-4 gap-3  '>
       
       {allnavs.map((item, index) => {
        return (
          <Link style={{color: location.pathname == item.ref ? '#4B6BFB' : color.textprimary}} to={item.ref} className=' font-work-sans font-normal text-xs sm:text-sm lg:text-base leading-6   ' key={index}  >{item.name}</Link>
        )
       })}
    </div>
  )
}
