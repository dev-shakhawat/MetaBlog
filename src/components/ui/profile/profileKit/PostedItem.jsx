import React from 'react'
import colorSchema from '../../../../colors/colorSchema'
import convertToBangladeshTime from '../../../../helpers/timeConverter';

export default function PostedItem({data}) {

    const color  = colorSchema();

    console.log(data?.featuredImage);
    

  return (
    <div style={{background: color.bgsecondary}} className='p-2 rounded-[5px]  '>
        

        {/* category and time */}
        <div className="flex justify-between items-center  ">
          <p   className=" font-work-sans font-semibold text-sm leading-5 capitalize py-1 px-2.5 rounded-[5px] w-fit bg-[#4B6BFB]/80 text-white   ">{data?.category}</p>
 
          <p style={{color: color.textprimary}} className=" text-sm   ">{convertToBangladeshTime(data?.publishedAt)}</p>

        </div>

        {/* title */}
        <h2 style={{color: color.textprimary}} className=" font-work-sans font-semibold text-lg leading-6 mt-3 line-clamp-2 text-ellipsis     ">{data?.title}</h2>

        {/* description */}
        <p style={{color: color.textsecondary}} className=" font-work-sans font-medium text-sm leading-5 mt-2 line-clamp-3 text-ellipsis     ">{data?.description}</p>


        {/* image */}
        <img src={`http://${data?.featuredImage}`} alt={'image'} className=' w-full h-60 rounded-[5px] object-cover mt-5     ' />
    </div>
  )
}
