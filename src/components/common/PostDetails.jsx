import React from 'react'
import colorSchema from '../../colors/colorSchema'

export default function PostDetails({tag , title , posterimage , postername , postdate , className }) {

    const color = colorSchema()

  return (
    <div style={{  background:  color.bgprimary}} className={`  rounded-[10px] ${className} `}  >
      
      <p  className="font-work-sans font-medium text-sm leading-5 text-[] capitalize bg-[#4B6BFB]/10 text-[#4B6BFB] py-1 px-2.5 rounded-[5px] w-fit   " >{tag}</p>
      
      {/* title */}
      <h2 style={{color: color.textprimary}} className="mt-4 font-work-sans font-bold text-[36px] leading-10 line-clamp-2 text-ellipsis     ">{title}</h2>

      {/* poseter information */}
      <div className="flex mt-6 items-center gap-5 ">

        {/* poster pic */}
        {posterimage ? <img src={posterimage} alt="poster" className=' w-9 h-9 rounded-full    ' /> : <div style={{background: color.bgsecondary}} className=' w-9 h-9 rounded-full    '></div>}

        {/* poster name */}
        <p style={{color: color.textsecondary}} className=" font-work-sans font-medium text-base leading-6   ">{postername}</p>
        
        {/* poster date */}
        <p style={{color: color.textsecondary}} className=" font-work-sans font-medium text-base leading-6   ">{postdate}</p>


      </div>

    </div>
  )
}
