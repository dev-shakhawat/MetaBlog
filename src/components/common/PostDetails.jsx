import React from 'react'
import colorSchema from '../../colors/colorSchema'

export default function PostDetails({tag , title , posterimage , postername , postdate , className }) {

    const color = colorSchema()

  return (
    <div style={{  background:  color.bgprimary}} className={`  rounded-[10px] ${className} `}  >
      
      <p  className="font-work-sans font-medium text-sm leading-5 text-[] capitalize bg-[#4B6BFB]/10 text-[#4B6BFB] py-1 px-2.5 rounded-[5px] w-fit   " >{tag}</p>
      
      {/* title */}
      <h2 style={{color: color.textprimary}} className=" h-20 mt-4 font-work-sans font-bold xl:text-[30px] lg:text-[24px] md:text-xl text-base leading-10 line-clamp-2 text-ellipsis      ">{title}</h2>

      {/* poseter information */}
      <div className="flex   mt-6 items-center gap-5 ">

        {/* poster pic */}
        {posterimage ? <img src={`http://${posterimage}`} alt="poster" className=' w-9 h-9 rounded-full    ' /> : <div style={{background: color.bgsecondary}} className=' w-9 h-9 rounded-full    '></div>}

        {/* poster name */}
        <p style={{color: color.textsecondary}} className=" font-work-sans  font-medium  leading-6 text-ellipsis overflow-hidden whitespace-nowrap w-[100px] md:w-auto text-xs sm:text-sm md:text-base  ">{postername}</p>
        
        {/* poster date */}
        <p style={{color: color.textsecondary}} className=" font-work-sans font-medium leading-6  overflow-hidden whitespace-nowrap w-[100px] md:w-auto ml-auto text-ellipsis text-xs sm:text-sm md:text-base ">{postdate}</p>

      </div>

    </div>
  )
}
