import React from 'react'
import colorSchema from '../../../../colors/colorSchema'
import { signupValues, signupValuesSchema } from './signupValues';
import { useFormik } from 'formik';
import InputField from '../../../common/InputField';
import { Link } from 'react-router';
import Google from '../continueWith/google/Google';
import Facebook from '../continueWith/facebook/Facebook';
import { useDispatch } from 'react-redux';

export default function Signup() {
    
    const color = colorSchema();
    const dispatch = useDispatch();

    const { handleChange, handleSubmit, values , errors } = useFormik({
      initialValues: signupValues,
      validationSchema: signupValuesSchema,
      onSubmit: (values) => {
    },
});
 
    

  return (
    
    <form className='w-1/2 mx-auto mt-20 ' onSubmit={handleSubmit} >

        <h2 style={{color: color.textprimary}} className=" font-work-sans font-bold text-4xl text-center my-10   " >Sign Up</h2>

        <div className="flex flex-col gap-5  "> 
            
            <InputField title="Name" placeholder={`Your name`} name={`name`} onChange={handleChange} value={values.name} />

            <InputField title="Email" placeholder={`Your email`} name={`email`} onChange={handleChange} value={values.email} />

            <InputField title="Password" placeholder={`Your password`} name={`password`} onChange={handleChange} value={values.password} />

            <div className="flex gap-2 ">
                <input type="checkbox" />
                <h2 style={{color: color.textprimary}}  >I accept the <Link to={`/terms`} className='font-semibold text-blue-500 ' >Terms and Conditions</Link></h2>
            </div>

            <button type="submit" className=' py-3 px-5 rounded-[6px] cursor-pointer  bg-blue-500 text-white font-work-sans font-medium text-base leading-6   ' >Create an account</button>
            
            <div className="flex gap-2 ">
                <p style={{color: color.textprimary}} className="">Already have an account?</p>
                <button onClick={() => dispatch({type: "auth/switchAuth" , payload: "signin"})} type='button'  className='font-semibold text-blue-500 cursor-pointer ' >Login here</button>
            </div>

        </div>

        <h2 style={{color: color.textprimary}} className=" font-work-sans font-medium text-xl text-center mt-4   ">OR</h2>
        <p style={{color: color.textsecondary}} className="font-work-sans font-medium text-base text-center    ">Continue with</p>

        <div className="flex gap-2 mt-5">
            <Google/>
            <Facebook/>
        </div>

    </form>

  )
}
