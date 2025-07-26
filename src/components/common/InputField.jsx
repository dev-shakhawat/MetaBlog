import React from 'react'
import colorSchema from '../../colors/colorSchema'

export default function InputField({title , onChange , value , name , className}) {

  const color = colorSchema();

  return (
    <div className={className}>
        <p style={{color: color.textprimary}} className=" capitalize font-inter font-medium text-base  ">{title}</p>
        <input  name={name} style={{background: color.bgsecondary , color: color.textprimary}} placeholder={`Your ${title}`} id={title}  onChange={onChange} value={value} type="text" className='mt-1 w-full py-3 px-4 rounded-[6px]  border border-gray-100/20 outline-0     ' />
    </div>
  )
}
