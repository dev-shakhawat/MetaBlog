import React, { useState } from 'react'
import InputField from '../../../common/InputField'
import colorSchema from '../../../../colors/colorSchema';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { signupValues, signupValuesSchema } from '../signUp/signupValues';
import Google from '../continueWith/google/Google';
import Facebook from '../continueWith/facebook/Facebook';
import axios from 'axios';
import { hasStatus } from '../../../../redux/slices/notificationSlice';
import Status from '../../../common/Status';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { signinValues, signinValuesSchema } from './signinValues';


export default function Signin() {

  const color = colorSchema();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const { handleChange, handleSubmit, values , errors } = useFormik({
    initialValues: signinValues,
    validationSchema: signinValuesSchema,
    onSubmit: async (values) => {

      setIsLoading(true);

      try{
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/auth/signIn`, {email: values.email , password: values.password});
  
        if(response?.data){
           dispatch(hasStatus({status: true , message: response.data.sms}));
           setTimeout(() => {
            dispatch(hasStatus(null));
            setIsLoading(false);
            window.location.reload();
           }, 1500);
        }
      }catch(error){
        setIsLoading(false);
        console.log(error);
      }
      
    },
  })

  const handleError = () => { 
    console.log(errors);
    console.log(values);
    
    
  }

  return (
    <form className='md:w-1/2 w-4/5 mx-auto xl:mt-20 lg:mt-16 md:mt-12 sm:mt-8 mt-0 ' onSubmit={handleSubmit} >
    
    <Status/>

    <h2 style={{color: color.textprimary}} className=" font-work-sans font-bold 2xl:text-4xl xl:text-2xl lg:text-xl md:text-lg text-base text-center xl:my-10 md:my-7 my-4   " >Sign In</h2>

    <div className="flex flex-col md:gap-5 gap-3 "> 
          
        <InputField title="Your email" placeholder={`Your email`} name={`email`} onChange={handleChange} value={values.email} />

        <InputField title="Your password" placeholder={`Your password`} name={`password`} onChange={handleChange} value={values.password} />

        <button onClick={handleError} type="submit"  className='flex items-center justify-center gap-2 py-3 px-5 rounded-[6px] cursor-pointer  bg-blue-500 text-white font-work-sans font-medium  text-sm md:text-base leading-6   ' >
          <span>Log In</span>
          {isLoading && <AiOutlineLoading3Quarters className='animate-rotate'/>}
        </button>
        
        <div className="flex flex-col md:flex-row items-start md:gap-2 relative ">
            <p style={{color: color.textprimary}} className="font-work-sans text-xs md:text-sm lg:text-base">You haven't an account?</p>
            <button onClick={() => dispatch({type: "auth/switchAuth" , payload: "signup"})} type='button'  className='   font-semibold text-blue-500 cursor-pointer font-work-sans text-xs md:text-sm lg:text-base ' >Create here</button>

            <button onClick={() => dispatch({type: "auth/switchAuth" , payload: "reset"})} type="button" className='absolute right-0 font-semibold text-blue-500 cursor-pointer  font-work-sans text-xs md:text-sm lg:text-base' >Forget Password?</button>
        </div>

    </div>

    <h2 style={{color: color.textprimary}} className=" font-work-sans font-medium xl:text-xl lg:text-lg md:text-base text-sm text-center mt-4   ">OR</h2>
    <p style={{color: color.textsecondary}} className="font-work-sans font-medium text-base text-center    ">Continue with</p>
 

    <div className="flex gap-2 mt-5">
      <Google/>
      <Facebook/>
    </div>

</form>
  )
}
