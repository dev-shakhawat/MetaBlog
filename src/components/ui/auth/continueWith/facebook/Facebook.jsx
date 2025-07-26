import React from 'react'

import { FaFacebook } from "react-icons/fa";

export default function Facebook({className}) {
  return (
    <button type='button' className={`${className} text-4xl flex items-center justify-center gap-2 cursor-pointer  bg-blue-100 w-full py-2 rounded-[10px] text-[#166afc]   `}><FaFacebook/></button>
  )
}
