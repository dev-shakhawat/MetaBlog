import React from 'react'
import colorSchema from '../../colors/colorSchema'

export default function InputField({title , onChange , value , name , className , placeholder }) {

  const color = colorSchema();

  return (
    <div className={className}>
        {title && <p style={{color: color.textprimary}} className="  font-inter font-medium text-base mb-1  ">{title}</p>}
        <input  name={name} style={{background: color.bgsecondary , color: color.textprimary}} placeholder={placeholder} id={title}  onChange={onChange} value={value} type="text" className=' w-full py-3 px-4 rounded-[6px]  border border-gray-100/20 outline-0     ' />
    </div>
  )
}
