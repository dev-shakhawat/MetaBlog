import React from 'react'
import InputField from '../../../common/InputField'
import colorSchema from '../../../../colors/colorSchema';

export default function ResetPass() {

    const color = colorSchema();

  return (
        <div className='w-1/2 mx-auto mt-20   '>
            
            <h2 style={{color: color.textprimary}} className=" font-work-sans font-bold text-4xl text-center my-10   ">Change Password</h2>
            
            <InputField  placeholder={`New Password`} className={`w-full`}    />
    
            <button type="submit" className=' py-2 px-5 rounded-[6px] cursor-pointer  bg-blue-500 text-white font-work-sans font-medium text-base leading-6 w-full mt-2  ' >Update Password</button>
    
    
        </div>
  )
}
