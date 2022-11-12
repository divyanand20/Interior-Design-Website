import React from "react";
import "./index.css";
import Home from "./routes/Home";
import Contact from "./routes/Contact"
import Portfolio from "./routes/Portfolio";
import Services from "./routes/Services";
import AboutUs from "./routes/AboutUs";
import Login from "./routes/Login";
import { Route, Routes } from "react-router-dom";
import Register from "./routes/Register";
import Write1 from "./routes/Write1";
import { useSelector } from "react-redux";

function App() {

  const isLoggedIn = useSelector(state=> state.isLoggedIn);
  console.log(isLoggedIn)

  const user=true;
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/portfolio" element={<Portfolio />}/>
      <Route path="/services" element={<Services />}/>
      <Route path="/aboutus" element={<AboutUs/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/write" element={user? <Write1/>:<Register/>}/>
    </Routes>
    </>
  );
}

export default App;
