import React, { useState } from 'react'
import GetOtp from './GetOtp';
import ResetPass from './ResetPass';

export default function ForgetPass() {

    const [isotpdone , setIsotpdone] = useState(false);

  return (
    <div>
        
        {isotpdone ? <ResetPass/> : <GetOtp setIsotpdone={setIsotpdone}/>}

    </div>
  )
}
