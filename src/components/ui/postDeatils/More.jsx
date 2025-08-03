import React from 'react'
import colorSchema from '../../../colors/colorSchema';


// icons
import { BsCopy } from "react-icons/bs";
import { CiTrash } from "react-icons/ci";
import { CiWarning } from "react-icons/ci";

export default function More({className}) {

    const color = colorSchema();

  return (
    <div style={{background: color.bgsecondary}} className={`${className} absolute  p-2 rounded-[5px]        `}>
        
        <button style={{color: color.textsecondary}}  type="button" className='w-full flex items-center gap-2 hover:bg-gray-50/10 py-1 px-2 cursor-pointer rounded-[5px]  '><BsCopy/> <span>Copy link</span></button>
        
        <button style={{color: color.textsecondary}}  type="button" className='w-full flex items-center gap-2 hover:bg-gray-50/10 py-1 px-2 cursor-pointer rounded-[5px]  '><CiTrash className='text-[22px]'/> <span>Delete Post</span></button>

        <button style={{color: color.textsecondary}}  type="button" className='w-full flex items-center gap-2 hover:bg-gray-50/10 py-1 px-2 cursor-pointer rounded-[5px]  '><CiTrash className='text-[22px]'/> <span>Delete Post</span></button>


    </div>
  )
}
