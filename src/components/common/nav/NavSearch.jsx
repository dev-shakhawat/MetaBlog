import React from 'react'
import colorSchema from '../../../colors/colorSchema'

import { IoSearchOutline } from "react-icons/io5";

export default function NavSearch() {

  const color = colorSchema() 

  return (
    <div style={{background: color.bgsecondary}} className='flex-1 p-2   rounded-[5px] hidden md:flex   '>
      <input type="text" placeholder='Search ' style={{color: color.textsecondary}} className='flex-1 bg-transparent outline-none font-inter font-normal text-sm leading-5    ' />
      <button type="button" style={{color: color.textsecondary}} className='cursor-pointer'><IoSearchOutline/></button>
      
    </div>
  )
}
