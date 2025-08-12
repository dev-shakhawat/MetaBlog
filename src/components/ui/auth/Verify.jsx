import React, { useEffect, useState } from 'react'
import InputField from '../../common/InputField'
import colorSchema from '../../../colors/colorSchema';
import { useNavigate, useParams } from 'react-router';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { hasStatus } from '../../../redux/slices/notificationSlice';
import Status from '../../common/Status';
import { switchAuth } from '../../../redux/slices/authSlice';

export default function Verify() {

    const color = colorSchema();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {id} = useParams();

    const [otp , setOtp] = useState(''); 
    
    console.log(id);
    

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    const handleSubmit = async ()=>{
      if(otp){
        
        try{
          const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/auth/verifyAccount`, {id, otp});
          const data = response.data;

          if(data.status){
            dispatch(hasStatus({status: true , message: data.sms}));
            dispatch(switchAuth(data.redirect));
            
            setTimeout(() => {
              dispatch(hasStatus(null));
              navigate('/auth');
            }, 2000);
          } 
           
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

    const handleResetOTP = async ()=>{
      try{
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/auth/reSendOtp`, {userID: id});
        const data = response.data;
        if(data.status){
          dispatch(hasStatus({status: true , message: data.sms}));
          setTimeout(() => {
            dispatch(hasStatus(null));
          }, 1500);
        }
      }catch(error){
        console.log(error);
      }
    }
    
  return (
    <div className='md:w-1/2 w-3/4 mx-auto 2xl:pt-35 xl:pt-33 lg:pt-30 md:pt-25 sm:pt-20 pt-15   '>

        <Status/>
        
        <h2 style={{color: color.textprimary}} className=" font-work-sans font-bold 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-base text-center    ">Account Verification</h2>
        <p style={{color: color.textsecondary}} className=" font-work-sans text-xs md:text-sm lg:text-base text-center pb-5  ">Enter the OTP we send to your email</p>

        <div className="mt-2">

          <div className="flex gap-2 ">
            <InputField  placeholder={`Enter OTP`} className={`flex-1   `} onChange={(e) => setOtp(e.target.value)}     />
            <button onClick={handleResetOTP} type="button" className=' px-3 rounded-[5px] cursor-pointer   bg-blue-500 text-white font-work-sans   text-xs md:text-base  '>Re-send</button>
          </div>
          
          {otp.length >= 8 ? 
          <button  onClick={handleSubmit} type="button" className='py-2 w-full mt-2 px-5 rounded-[6px] cursor-pointer  bg-blue-500 text-white font-work-sans font-medium  text-sm md:text-base leading-6 '>Continue</button>
          :
          <button     type="button" className='py-2 w-full mt-2 px-5 rounded-[6px] cursor-pointer bg-black/50 text-white font-work-sans font-medium  text-sm md:text-base leading-6 '>Continue</button>
        }
        </div>
 
    </div>
  )
}
