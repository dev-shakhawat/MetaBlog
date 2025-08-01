import React from 'react'
import InputField from '../../../common/InputField'
import colorSchema from '../../../../colors/colorSchema';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { signupValues, signupValuesSchema } from '../signUp/signupValues';
import Google from '../continueWith/google/Google';
import Facebook from '../continueWith/facebook/Facebook';

export default function Signin() {

  const color = colorSchema();
  const dispatch = useDispatch();
  const { handleChange, handleSubmit, values , errors } = useFormik({
    initialValues: signupValues,
    validationSchema: signupValuesSchema,
    onSubmit: (values) => {
      console.log(values);
      alert(JSON.stringify(values, null, 2));
    },
  })

  return (
    <form className='w-1/2 mx-auto mt-20 ' onSubmit={handleSubmit} >

    <h2 style={{color: color.textprimary}} className=" font-work-sans font-bold text-4xl text-center my-10   " >Sign In</h2>

    <div className="flex flex-col gap-5  "> 
          
        <InputField title="Your email" placeholder={`Your email`} name={`email`} onChange={handleChange} value={values.email} />

        <InputField title="Your password" placeholder={`Your password`} name={`password`} onChange={handleChange} value={values.password} />

        <button type="submit" className=' py-3 px-5 rounded-[6px] cursor-pointer  bg-blue-500 text-white font-work-sans font-medium text-base leading-6   ' >Create an account</button>
        
        <div className="flex gap-2 relative ">
            <p style={{color: color.textprimary}} className="">You haven't an account?</p>
            <button onClick={() => dispatch({type: "auth/switchAuth" , payload: "login"})} type='button'  className='font-semibold text-blue-500 cursor-pointer ' >Create here</button>

            <button onClick={() => dispatch({type: "auth/switchAuth" , payload: "reset"})} type="button" className='absolute right-0 font-semibold text-blue-500 cursor-pointer ' >Forget Password?</button>
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
