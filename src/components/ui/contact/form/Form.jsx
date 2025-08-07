import React from "react";
import { useFormik } from "formik";
import {contactValuesSchema} from "./contactValues";
import {contactValues} from "./contactValues"
import InputField from "../../../common/InputField"; 
import colorSchema from "../../../../colors/colorSchema";

export default function Form() {

  const color = colorSchema();

  const { handleChange, handleSubmit, values , errors } = useFormik({
    initialValues: contactValues,
    validationSchema: contactValuesSchema,
    onSubmit: (values) => {
      console.log(values);
      alert(JSON.stringify(values, null, 2));
    },
  });

  console.log(errors);
  

  return ( 
      <div className=" flex-2 px-2  ">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-5 ">
            <InputField title="name" name={`name`} onChange={handleChange} value={values.name} />
            <InputField title="email" name={`email`} onChange={handleChange} value={values.email} />
          </div>

          <InputField title="subject" name={`subject`} onChange={handleChange} value={values.subject} className={"mt-2"} />

          <textarea   placeholder="Your message" style={{background: color.bgsecondary , color: color.textprimary}} name="message" onChange={handleChange} value={values.message} className="mt-5 w-full py-3 px-4 rounded-[6px]  border border-gray-100/20 outline-0    " id=""></textarea>
          

          <p style={{color: color.textsecondary}} className=" font-inter font-normal text-sm   mt-2   ">By submitting this form you agree to our terms and conditions and our privacy policy which explains how we may collect, use and disclose your personal information including to third parties.</p>


          <button   type="submit" className="py-2 px-5 rounded-[5px] bg-blue-500 text-white mt-10 font-work-sans font-medium text-base cursor-pointer   ">Send message</button>
        </form>
      </div> 
  );
}
