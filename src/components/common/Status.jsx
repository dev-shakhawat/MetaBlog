import React from 'react'

// icons
import { GoCheckCircle } from "react-icons/go";
import { CiWarning } from "react-icons/ci";

// color
import colorSchema from '../../colors/colorSchema';

export default function Status({status , message }) {

  const color = colorSchema();

  return (
    <div className={`border border-gray-100/50 rounded-[10px] w-1/4 fixed top-1/2 left-1/2 -translate-1/2 p-2 ${status === true ? 'bg-green-500/30 text-white' : 'bg-red-500/30 text-white'}    `}>
        
        {/* icons */}
        <button style={{color: color.textprimary}} type="button" className=' w-full text-center flex   items-center justify-center gap-0'>
          {status === true ? <CiWarning className='inline-block text-2xl '/> : <CiWarning className='inline-block text-2xl '/>}
          {status === true ? <span className='text-base'>Successfull</span> : <span className='text-base'>Sorry</span>}
        </button>

        <p style={{color: color.textprimary}} className="text-center mt-2    ">{message}</p>

    </div>
  )
}
