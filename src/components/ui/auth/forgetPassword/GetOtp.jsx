import React, { useEffect, useState } from 'react'
import InputField from '../../../common/InputField'
import colorSchema from '../../../../colors/colorSchema';
import axios from 'axios';
import { hasStatus } from '../../../../redux/slices/notificationSlice';
import { useDispatch } from 'react-redux';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Status from '../../../common/Status';

export default function GetOtp({setResetPass ,setResetmail , setResetotp}) {

    const color = colorSchema();
    const [email , setEmail] = useState('');
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const [otpMatch , setOTPmatch] = useState(false);
    const [otp , setOtp] = useState('');

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [])

    const handleGetOtp = async () => { 
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setIsLoading(true);
      try{
        if(emailRegex.test(email)){
           const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/auth/resetPasswordOTP`, {email});
           const data = response.data;
           console.log(response);
           
           if(data.status){
              setIsLoading(false);
              dispatch(hasStatus({status: true , message: data.sms}));
              setTimeout(() => {
                dispatch(hasStatus(null));
              }, 1500);
           }
        }
        else{
          setIsLoading(false);
          dispatch(hasStatus({status: false , message: 'Invalid email'}));
          setTimeout(() => {
            dispatch(hasStatus(null));
          }, 1500);
        }
      }catch(error){
        setIsLoading(false);
        console.log(error);
      }
    }

    const handleSubmitOtp = async ()=>{
      setOTPmatch(true);
       try{
         const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/auth/matchOTPforResetPass`, {email , otp});
         const data = response.data;
         
         if(data.status){
            setOTPmatch(false); 
            setResetmail(email);
            dispatch(hasStatus({status: true , message: data.sms}));
            setTimeout(() => {
              setResetPass("reset");
              dispatch(hasStatus(null));
            }, 1500);
         }
       }catch(error){ 
         setOTPmatch(false);
       }
    }

  return (
    <div className='md:w-1/2 w-3/4 mx-auto 2xl:mt-20 xl:mt-16 lg:mt-12 md:mt-10 sm:mt-8 mt-4   '>
        <Status/>
        <h2 style={{color: color.textprimary}} className=" font-work-sans font-bold 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-base text-center xl:my-10 lg:my-8 md:my-6 sm:my-4 my-2   ">Get OTP</h2>

        <div className="flex gap-2   ">
            <InputField  placeholder={`Your email`} className={`flex-1`} onChange={(e) => setEmail(e.target.value)}     />

            <button onClick={handleGetOtp} type="submit" className='flex items-center justify-center gap-2 h-inherit px-5 rounded-[6px] cursor-pointer  bg-blue-500 text-white font-work-sans font-medium text-xs sm:text-sm md:text-base leading-6   ' >
              <span>Get OTP</span>
              {isLoading && <AiOutlineLoading3Quarters className='animate-rotate' />}
            </button>

        </div>

        <div className="mt-2">

          <InputField  placeholder={`Enter OTP`} className={`mt-2`} onChange={(e) => setOtp(e.target.value)}    />

          {otp.length >= 8 ? 
          <button onClick={handleSubmitOtp}   type="button" className=' flex items-center gap-2  justify-center   py-2 w-full mt-2 px-5 rounded-[6px] cursor-pointer  bg-blue-500 text-white font-work-sans font-medium  text-sm md:text-base leading-6 '>
            <span>Continue</span>
            {otpMatch && <AiOutlineLoading3Quarters className='animate-rotate' />}
          </button>
          :
          <button     type="button" className='py-2 w-full mt-2 px-5 rounded-[6px] cursor-pointer bg-black/50 text-white font-work-sans font-medium  text-sm md:text-base leading-6 '>Continue</button>
        }

        </div>


    </div>
  )
}
