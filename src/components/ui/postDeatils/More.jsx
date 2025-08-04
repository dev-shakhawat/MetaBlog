import React, { useState } from 'react'
import colorSchema from '../../../colors/colorSchema';


// icons
import { BsCopy } from "react-icons/bs";
import { CiTrash } from "react-icons/ci";
import { CiWarning } from "react-icons/ci";
import { useSelector } from 'react-redux';

export default function More({className , posterId}) {

    const color = colorSchema();
    const userInfo = useSelector((state) => state.user.user); 
    
    console.log(userInfo , posterId);
    

    // copy link
    const [copy , setCopy] = useState("Copy link");
    const handleCopyLink = async () => {
      try {
        await navigator.clipboard.writeText(window.location.href);
        setCopy("Copied");
        setTimeout(() => {
          setCopy("Copy link");
        }, 1000);
      } catch (err) {
        console.error("Failed to copy link:", err);
      }
    };

    

  return (
    <div style={{background: color.bgsecondary}} className={`${className} absolute  p-2 rounded-[5px]        `}>
        
        <button style={{color: color.textsecondary}} onClick={handleCopyLink}  type="button" className='w-full flex items-center gap-2 hover:bg-gray-50/10 py-1 px-2 cursor-pointer rounded-[5px]  '><BsCopy/> <span>{copy}</span></button>
        
        {posterId === userInfo?.id && <button  style={{color: color.textsecondary}}  type="button" className='w-full flex items-center gap-2 hover:bg-gray-50/10 py-1 px-2 cursor-pointer rounded-[5px]  '><CiTrash className='text-[22px]'/> <span>Delete Post</span></button>}

        <button style={{color: color.textsecondary}}  type="button" className='w-full flex items-center gap-2 hover:bg-gray-50/10 py-1 px-2 cursor-pointer rounded-[5px]  '><CiWarning className='text-[22px]'/> <span>Report Post</span></button>

    </div>
  )
}
