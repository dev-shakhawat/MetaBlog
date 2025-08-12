import React, { useState } from 'react'
import InputField from '../../../common/InputField'
import colorSchema from '../../../../colors/colorSchema';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { hasStatus } from '../../../../redux/slices/notificationSlice';
import { switchAuth } from '../../../../redux/slices/authSlice';
import { useNavigate } from 'react-router';

export default function ResetPass({resetmail}) {

  console.log(resetmail);
  

    const color = colorSchema();
    const [password , setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate()
    


    const handleChangePass = async ()=>{
      setIsLoading(true);
      if(password === '') return
       try{
         const response  = await axios.post(`${import.meta.env.VITE_BASE_URL}/auth/resetPassword`, {email: resetmail , password});

         const data = response.data;
         if(data.status){
          setIsLoading(false);
          dispatch(hasStatus({status: true , message: data.sms}));
          setTimeout(() => {
            dispatch(hasStatus(null));
            navigate('/auth')
            dispatch(switchAuth(data.redirect));
          }, 1500)
         }
       }catch(error){
        setIsLoading(false);
         console.log(error);
       }
    }

  return (
        <div className='md:w-1/2 w-3/4 mx-auto xl:mt-20 lg:mt-16 md:mt-12 sm:mt-8 mt-4   '>
            
            <h2 style={{color: color.textprimary}} className=" font-work-sans font-bold 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-base text-center xl:my-10 lg:my-8 md:my-6 my-4   ">Change Password</h2>
            
            <InputField  placeholder={`New Password`} className={`w-full`}  onChange={(e) => setPassword(e.target.value)}   />
    
            <button onClick={handleChangePass} type="submit" className=' py-2 px-5 rounded-[6px] cursor-pointer  bg-blue-500 text-white font-work-sans font-medium lg:text-base   text-sm leading-6 w-full mt-2 flex items-center gap-2 justify-center  ' >
             <span>Update Password</span>
              {isLoading && <AiOutlineLoading3Quarters/>}
            </button>
    
        </div>
  )
}
