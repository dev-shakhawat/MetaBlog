import React, { useEffect } from "react";

// components
import Container from "../components/common/Container";
import Signup from "../components/ui/auth/signUp/Signup";
import Signin from "../components/ui/auth/signIn/Signin";

// redux
import { useDispatch, useSelector } from "react-redux";
import ForgetPass from "../components/ui/auth/forgetPassword/ForgetPass";
import { userSet } from "../redux/slices/userSlice";
import Profile from "../components/ui/profile/Profile";



export default function Auth() {
  const authval = useSelector((state) => state.auth.auth);
  const userval = useSelector((state) => state.user.user);
  const dispatch = useDispatch(); 
  

  useEffect(() => {

    async function checkUser (){
      const response = await fetch('http://localhost:3000/auth/checkUser', {
        method: 'GET',
        credentials: 'include', 
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json()
      dispatch(userSet(data.user))
    }

    checkUser();
    
  } , [])


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
