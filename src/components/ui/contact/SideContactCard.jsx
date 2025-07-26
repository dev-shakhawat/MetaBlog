import React from 'react'
import colorSchema from '../../../colors/colorSchema';

export default function SideContactCard({logo , title , text }) {

    const color = colorSchema();

  return (
    <div className=' p-5 flex flex-col items-center    '>
        
        <div style={{background: color.bgsecondary}} className="w-15 h-15 rounded-[10px] grid place-items-center   ">{logo}</div>

        <h2 style={{color: color.textprimary}} className=" font-work-sans font-semibold text-xl leading-5 mt-4    ">{title}</h2>

        <p style={{color: color.textsecondary}} className="font-inter font-normal text-base mt-1 w-3/4 text-center mx-auto    ">{text}</p>

    </div>
  )
}
