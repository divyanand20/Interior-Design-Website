import React from 'react'
import Adbar from '../components/adbar/Adbar'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import Login1 from '../components/login/Login1'


const Login = () => {
  return (
    <div >
        <Adbar/>
        <Navbar/>
        <Login1/>
        <Footer/>
    </div>
  )
}

export default Login