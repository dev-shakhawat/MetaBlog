import React from 'react'
import InputField from '../../../common/InputField'
import colorSchema from '../../../../colors/colorSchema';

export default function ResetPass() {

    const color = colorSchema();

  return (
        <div className='md:w-1/2 w-3/4 mx-auto xl:mt-20 lg:mt-16 md:mt-12 sm:mt-8 mt-4   '>
            
            <h2 style={{color: color.textprimary}} className=" font-work-sans font-bold 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-base text-center xl:my-10 lg:my-8 md:my-6 my-4   ">Change Password</h2>
            
            <InputField  placeholder={`New Password`} className={`w-full`}    />
    
            <button type="submit" className=' py-2 px-5 rounded-[6px] cursor-pointer  bg-blue-500 text-white font-work-sans font-medium lg:text-base   text-sm leading-6 w-full mt-2  ' >Update Password</button>
    
        </div>
  )
}
