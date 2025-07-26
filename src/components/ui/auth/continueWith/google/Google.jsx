import React from 'react'

import { FcGoogle } from "react-icons/fc";

export default function Google({className}) {
  return (
    <button type='button' className={`${className} text-4xl flex items-center justify-center gap-2 cursor-pointer  bg-blue-100 w-full py-2 rounded-[10px]   `}><FcGoogle/></button>
  )
}
