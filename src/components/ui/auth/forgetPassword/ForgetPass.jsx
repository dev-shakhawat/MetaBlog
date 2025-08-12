import React, { useState } from 'react'
import GetOtp from './GetOtp';
import ResetPass from './ResetPass';

export default function ForgetPass() {

    const [resetPass , setResetPass] = useState("otp");
    const [resetmail , setResetmail] = useState('');  

  return (
    <div>
        
        {resetPass === "otp" && <GetOtp setResetPass={setResetPass} setResetmail={setResetmail}  />}
        {resetPass === "reset" && <ResetPass resetmail={resetmail}/>}

    </div>
  )
}
