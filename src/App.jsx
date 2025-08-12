import { BrowserRouter, Routes, Route } from "react-router";


// layout
import Layout from "./components/common/Layout";


// redux
import { useDispatch } from "react-redux";
import { userSet } from "./redux/slices/userSlice";


// react
import { useEffect } from "react";


// pages
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Auth from "./pages/Auth";
import Contact from "./pages/Contact";
import Details from "./pages/Details";
import Verify from "./components/ui/auth/Verify";


function App() {

  const dispatch = useDispatch(); 

  useEffect(() => { 

    async function checkUser (){
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/auth/checkUser`, {
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
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}   >
        <Route index element={<Home/>} />
        <Route path="/blogs" element={<Blogs/>} />
        <Route path="/blogs/:id" element={<Details/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/auth" element={<Auth/>} />
        <Route path="/verify/:id" element={<Verify/>} />
      </Route>
    </Routes>
  </BrowserRouter>

  )
}

export default App
