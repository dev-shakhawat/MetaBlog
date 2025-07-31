import React, { useEffect } from "react";

import { FcGoogle } from "react-icons/fc";

import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export default function Google({ className }) {
  
  const auth = getAuth() 
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken; 
      
      if(user){
        const response = await fetch('https://blog-backend-production-9410.up.railway.app/auth/continueWithGoogle', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
             name: user.displayName,
             email: user.email,
             password: user.uid
          }) ,
          credentials: 'include'
        })

        const data = await response.json()
        console.log(data);
      }

    } catch (error) {
      console.error( error.message);
    }
  };

  return (
    <button
      onClick={handleGoogleSignIn}
      type="button"
      className={`${className} text-4xl flex items-center justify-center gap-2 cursor-pointer  bg-blue-100 w-full py-2 rounded-[10px]   `}
    >
      <FcGoogle />
    </button>
  );
}
