import React from 'react'

// icons
import { GoCheckCircle } from "react-icons/go";
import { CiWarning } from "react-icons/ci";

// color
import colorSchema from '../../colors/colorSchema';
import { useSelector } from 'react-redux'; 

export default function Status() {

  const color = colorSchema();
  const status = useSelector((state) => state.notify.status);  
  

  return (
    status &&
    <div className={`border border-gray-100/50 rounded-[10px] md:w-1/4 w-3/4 fixed top-1/2 left-1/2 -translate-1/2 p-2 ${status === true ? 'bg-green-500/30 text-white' : 'bg-red-500/30 text-white'}    `}>
        
        {/* icons */}
        <button style={{color: color.textprimary}} type="button" className=' w-full text-center flex   items-center justify-center gap-0'>
          {status.status === true ? <GoCheckCircle className='inline-block text-2xl '/> : <CiWarning className='inline-block text-2xl '/>}
          {status.status === true ? <span className='text-base'>Successfull</span> : <span className='text-base'>Sorry</span>}
        </button>

        <p style={{color: color.textprimary}} className="text-center mt-2    ">{status.message}</p>

    </div>
  )
}
