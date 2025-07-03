import React from "react";
import { useState,useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Courses from "./components/Courses";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Landing from "./components/Landing";
import { RecoilRoot } from "recoil";
 

let App=()=>{

  return(
<div style={{backgroundColor:"#eeeeee"}}>
  <RecoilRoot>
<Router>
<Navbar />
<Routes>
  
<Route path="/"element={<Landing />}></Route>
<Route path="/signup"element={<Signup />}></Route>
<Route path="/signin"element={<Signin />}></Route>
<Route path="/courses"element={<Courses />}></Route>
</Routes>
</Router>
</RecoilRoot>
</div>
  )
}
export default App