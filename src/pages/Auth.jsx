import React from 'react'
import Container from '../components/common/Container'
import Signup from '../components/ui/auth/signUp/Signup'
import Signin from '../components/ui/auth/signIn/Signin'
import { useSelector } from 'react-redux'

export default function Auth() {

  const authval = useSelector((state) => state.auth.auth)

  console.log(authval);
  
  
  return (
    <div className='pt-30    '>
      <Container>
       
       {authval === "signup" &&  <Signup/>}
       {authval === "signin" &&  <Signin/>}
       {/* {authval === "reset" &&  <Signin/>} */}
       

      </Container>
    </div>
  )
}
