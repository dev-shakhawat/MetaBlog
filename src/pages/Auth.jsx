import React, { useEffect } from "react";

// components
import Container from "../components/common/Container";
import Signup from "../components/ui/auth/signUp/Signup";
import Signin from "../components/ui/auth/signIn/Signin";

// redux
import { useSelector } from "react-redux";
import ForgetPass from "../components/ui/auth/forgetPassword/ForgetPass";
import Profile from "../components/ui/profile/Profile";



export default function Auth() {
  const authval = useSelector((state) => state.auth.auth);
  const userval = useSelector((state) => state.user.user);
  
  
 

  return (
    <div className="pt-30    ">
    {userval ? 
      <Profile/>
      : 
      <Container>
        {authval === "signup" && <Signup />}
        {authval === "signin" && <Signin />}
        {authval === "reset" && <ForgetPass />}
      </Container>
      }
    </div>
  );
}
