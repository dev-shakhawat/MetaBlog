import React from 'react'
import InputField from '../../../common/InputField'
import colorSchema from '../../../../colors/colorSchema';

export default function GetOtp() {

    const color = colorSchema();

  return (
    <div className='w-1/2 mx-auto mt-20   '>
        
        <h2 style={{color: color.textprimary}} className=" font-work-sans font-bold text-4xl text-center my-10   ">Get OTP</h2>

        <div className="flex gap-2   ">
            <InputField  placeholder={`Your email`} className={`flex-1`}    />

            <button type="submit" className=' h-inherit px-5 rounded-[6px] cursor-pointer  bg-blue-500 text-white font-work-sans font-medium text-base leading-6   ' >Get OTP</button>

        </div>

        <div className="mt-2">

          <InputField  placeholder={`Enter OTP`} className={`mt-2`}    />

          <button type="button" className='py-2 w-full mt-2 px-5 rounded-[6px] cursor-pointer  bg-blue-500 text-white font-work-sans font-medium text-base leading-6 '>Continue</button>
        </div>


    </div>
  )
}
