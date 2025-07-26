import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./components/common/Layout";


// pages
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Auth from "./pages/Auth";
import Contact from "./pages/Contact";


function App() {
 
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}   >
        <Route index element={<Home/>} />
        <Route path="/blogs" element={<Blogs/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/auth" element={<Auth/>} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
