import React, { useState } from 'react'
import InputField from '../../common/InputField'
import colorSchema from '../../../colors/colorSchema';
import { useParams } from 'react-router';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { hasStatus } from '../../../redux/slices/notificationSlice';
import Status from '../../common/Status';

export default function Verify() {

    const color = colorSchema();
    const status = useSelector((state) => state.notify.status);
    const dispatch = useDispatch();

    const {id} = useParams();

    const [otp , setOtp] = useState('');

    const handleSubmit = async ()=>{
      if(otp){
        
        try{
          const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/auth/verifyAccount`, {id, otp});
          const data = response.data;
          console.log(data);
        }
        catch(error){
          if(error?.response?.data){
            dispatch(hasStatus({status: false , message: error.response.data.sms}));
            setTimeout(() => {
              dispatch(hasStatus(null));
            }, 2000);
          }
        }
        
      }
    }
    

  return (
    <div className='md:w-1/2 w-3/4 mx-auto 2xl:pt-35 xl:pt-16 lg:pt-12 md:pt-10 sm:pt-8 pt-4   '>

        {status && <Status/>}
        
        <h2 style={{color: color.textprimary}} className=" font-work-sans font-bold 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-base text-center    ">Account Verification</h2>
        <p style={{color: color.textsecondary}} className=" font-work-sans text-xs md:text-sm lg:text-base text-center pb-5  ">Enter the OTP we send to your email</p>

        <div className="mt-2">

          <InputField  placeholder={`Enter OTP`} className={`mt-2`} onChange={(e) => setOtp(e.target.value)}     />
          
          {otp.length >= 8 ? 
          <button  onClick={handleSubmit} type="button" className='py-2 w-full mt-2 px-5 rounded-[6px] cursor-pointer  bg-blue-500 text-white font-work-sans font-medium  text-sm md:text-base leading-6 '>Continue</button>
          :
          <button     type="button" className='py-2 w-full mt-2 px-5 rounded-[6px] cursor-pointer bg-black/50 text-white font-work-sans font-medium  text-sm md:text-base leading-6 '>Continue</button>
        }
        </div>
 
    </div>
  )
}
