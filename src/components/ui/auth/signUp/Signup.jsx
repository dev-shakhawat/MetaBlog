import React, { useState } from 'react'
import colorSchema from '../../../../colors/colorSchema'
import { signupValues, signupValuesSchema } from './signupValues';
import { useFormik  } from 'formik'; 
import InputField from '../../../common/InputField';
import { Link, useNavigate } from 'react-router';
import Google from '../continueWith/google/Google';
import Facebook from '../continueWith/facebook/Facebook';
import { useDispatch } from 'react-redux';
import Status from '../../../common/Status';
import { hasStatus } from '../../../../redux/slices/notificationSlice';
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Signup() {
    
    const color = colorSchema();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const {handleChange , handleSubmit , values , errors} = useFormik({
      initialValues: signupValues,
      validationSchema: signupValuesSchema,
      onSubmit: async (values) => {
        
        setIsLoading(true);
        await fetch(`${import.meta.env.VITE_BASE_URL}/auth/signup`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
             name: values.name,
             email: values.email,
             password: values.password
          }) 
        })
        .then(response => response.json())
        .then(data => {
          setIsLoading(false);
          if(data?.redirect){
            navigate(data.redirect)
          }
        })
        .catch(error => {
          setIsLoading(false);
          console.log(error);
        });
        
      }
    })
    const handleClick = () => {
      if (errors.name || errors.email || errors.password) {
        dispatch(hasStatus({status: false , message: errors.name || errors.email || errors.password}));
        setTimeout(() => {
          dispatch(hasStatus(null));
        }, 3000)
      }
      
    }
  return (
    
    <form className='md:w-1/2 w-4/5 mx-auto xl:mt-20 lg:mt-16 md:mt-12 sm:mt-8 mt-0 ' onSubmit={handleSubmit} >

        <Status />

        <h2 style={{color: color.textprimary}} className=" font-work-sans font-bold 2xl:text-4xl xl:text-2xl lg:text-xl md:text-lg text-base text-center  xl:my-10 md:my-7 my-4    " >Sign Up</h2>

        <div className="flex flex-col md:gap-5 gap-3  "> 
            
            <InputField title="Name" placeholder={`Your name`} name={`name`} onChange={handleChange} value={values.name} />

            <InputField title="Email" placeholder={`Your email`} name={`email`} onChange={handleChange} value={values.email} />

            <InputField title="Password" placeholder={`Your password`} name={`password`} onChange={handleChange} value={values.password} />

            <div className="flex gap-2 "> 
                <h2 style={{color: color.textprimary}} className=" font-work-sans text-xs md:text-sm lg:text-base   "  >By creating an account, you accept the <Link to={`/terms`} className='font-semibold text-blue-500 ' >Terms and Conditions</Link></h2>
            </div>

            <button onClick={ handleClick } type="submit" className=' py-3 px-5 rounded-[6px] cursor-pointer  bg-blue-500 text-white font-work-sans font-medium md:text-base text-sm leading-6 flex items-center gap-2   ' >
              <span>Create an account</span>
              {isLoading && <AiOutlineLoading3Quarters className={`animate-rotate  `} />}
            </button>
            
            <div className="flex gap-2 ">
                <p style={{color: color.textprimary}} className="font-work-sans text-xs md:text-sm lg:text-base">Already have an account?</p>
                <button onClick={() => dispatch({type: "auth/switchAuth" , payload: "signin"})} type='button'  className='font-semibold text-blue-500 cursor-pointer font-work-sans text-xs md:text-sm lg:text-base ' >Login here</button>
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
