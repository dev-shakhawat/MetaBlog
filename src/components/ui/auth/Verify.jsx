import React, { use, useEffect, useState } from 'react'
import InputField from '../../common/InputField'
import colorSchema from '../../../colors/colorSchema';
import { useParams } from 'react-router';
import OtpInput from 'react-otp-input';

export default function Verify() {

    const color = colorSchema();

    const {id} = useParams();

    const [otp , setOtp] = useState('');

    const handleSubmit = ()=>{
      if(!otp || otp.length === 8){
        
      }
    }
    

  return (
    <div className='md:w-1/2 w-3/4 mx-auto 2xl:mt-35 xl:mt-16 lg:mt-12 md:mt-10 sm:mt-8 mt-4   '>
        
        <h2 style={{color: color.textprimary}} className=" font-work-sans font-bold 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-base text-center    ">Account Verification</h2>
        <p className=" font-work-sans text-xs md:text-sm lg:text-base text-center pb-5  ">Enter the OTP we send to your email</p>

        <div className="mt-2">

          <InputField  placeholder={`Enter OTP`} className={`mt-2`}    />
          
          {otp.length === 8 ? 
          <button  onClick={handleSubmit} onChange={(e) => setOtp(e.target.value)} type="button" className='py-2 w-full mt-2 px-5 rounded-[6px] cursor-pointer  bg-blue-500 text-white font-work-sans font-medium  text-sm md:text-base leading-6 '>Continue</button>
          :
          <button  onClick={handleSubmit} onChange={(e) => setOtp(e.target.value)} type="button" className='py-2 w-full mt-2 px-5 rounded-[6px] cursor-pointer  bg-blue-500 text-white font-work-sans font-medium  text-sm md:text-base leading-6 '>Continue</button>
        }
        </div>
 
    </div>
  )
}
