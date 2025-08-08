import React from 'react'

import { FaFacebook } from "react-icons/fa";

export default function Facebook({className}) {
  return (
    <button type='button' className={`${className}   flex items-center justify-center gap-2 cursor-pointer  bg-blue-100 flex-1 py-2 rounded-[5px] md:rounded-[10px] text-[#166afc] xl:text-4xl lg:text-3xl text-2xl  `}><FaFacebook/></button>
  )
}
