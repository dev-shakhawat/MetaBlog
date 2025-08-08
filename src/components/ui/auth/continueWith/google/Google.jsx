import React, { useEffect, useState } from "react";


// icons
import { RiLoader2Line } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";

import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export default function Google({ className }) {

  const [isProcessing, setIsProcessing] = useState(false);
  
  const auth = getAuth() 
  const handleGoogleSignIn = async () => {
    setIsProcessing(true);
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user; 
      
      if(user){
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/auth/continueWithGoogle`, {
          method: "POST",
          credentials: "include", 
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: user.displayName,
            email: user.email,
            password: user.uid,
            photoURL: user.photoURL
          }),
        });

        const data = await response.json()
        
        
        if(data){
          console.log(document.cookie)
          
          setTimeout(() => {
            setIsProcessing(false);
            window.location.reload()
          }, 3000);
        }
        
      }

    } catch (error) {
      console.log( error.message);
    }
  };

  return (
    <button
      onClick={handleGoogleSignIn}
      type="button"
      className={`${className} xl:text-4xl lg:text-3xl text-2xl flex items-center justify-center gap-2 cursor-pointer  bg-blue-100 flex-1 py-2 rounded-[5px] md:rounded-[10px]   `}
    >
      <FcGoogle className={`${isProcessing && "text-xl"  }`}/>
      
      {isProcessing && <RiLoader2Line className=" text-3xl absolute animate-rotate      " />}

    </button>
  );
}
