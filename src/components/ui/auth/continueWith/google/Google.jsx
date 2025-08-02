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
      
      if(user){
        const response = await fetch('http://localhost:3000/auth/continueWithGoogle', {
          method: 'POST',
          credentials: 'include', 
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
          window.location.reload()
        }
        
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
