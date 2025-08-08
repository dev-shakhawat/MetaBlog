import React from 'react'
import InputField from '../../../common/InputField'
import colorSchema from '../../../../colors/colorSchema';

export default function GetOtp({setIsotpdone}) {

    const color = colorSchema();

  return (
    <div className='md:w-1/2 w-3/4 mx-auto 2xl:mt-20 xl:mt-16 lg:mt-12 md:mt-10 sm:mt-8 mt-4   '>
        
        <h2 style={{color: color.textprimary}} className=" font-work-sans font-bold 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-base text-center xl:my-10 lg:my-8 md:my-6 sm:my-4 my-2   ">Get OTP</h2>

        <div className="flex gap-2   ">
            <InputField  placeholder={`Your email`} className={`flex-1`}    />

            <button type="submit" className=' h-inherit px-5 rounded-[6px] cursor-pointer  bg-blue-500 text-white font-work-sans font-medium text-xs sm:text-sm md:text-base leading-6   ' >Get OTP</button>

        </div>

        <div className="mt-2">

          <InputField  placeholder={`Enter OTP`} className={`mt-2`}    />

          <button onClick={() => setIsotpdone(true)} type="button" className='py-2 w-full mt-2 px-5 rounded-[6px] cursor-pointer  bg-blue-500 text-white font-work-sans font-medium  text-sm md:text-base leading-6 '>Continue</button>
        </div>


    </div>
  )
}
