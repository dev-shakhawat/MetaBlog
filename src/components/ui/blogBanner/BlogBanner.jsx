import React from 'react'

import colorSchema from '../../../colors/colorSchema'

export default function BlogBanner({tag , title , posterimage , postername , postdate ,   }) {

    const color = colorSchema();

  return (
    <div className="relative rounded-[10px]      ">
    <img src="/banner.png" alt="banner" className=" w-full  " />
  
    <div  className={`  rounded-[10px]  absolute -bottom-0 left-16 w-2/5 p-10 hidden   `}  >

        <p  className="font-work-sans font-medium text-sm leading-5 text-[] capitalize bg-[#4B6BFB] text-[#ffffff] py-1 px-2.5 rounded-[5px] w-fit   " >{tag}</p>

        {/* title */}
        <h2  className="mt-4 font-work-sans font-bold text-[36px] leading-10 line-clamp-3 text-ellipsis text-white     ">{title}</h2>

        {/* poseter information */}
        <div className="flex mt-6 items-center gap-5 ">

        {/* poster pic */}
        {posterimage ? <img src={posterimage} alt="poster" className=' w-9 h-9 rounded-full    ' /> : <div style={{background: color.bgsecondary}} className=' w-9 h-9 rounded-full    '></div>}

        {/* poster name */}
        <p  className=" font-work-sans font-medium text-base leading-6 text-white   ">{postername}</p>
        
        {/* poster date */}
        <p   className=" font-work-sans font-medium text-base leading-6 text-white   ">{postdate}</p>


        </div>

    </div>
  </div>
  )
}
