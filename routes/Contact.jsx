import React from 'react'
import Adbar from '../components/adbar/Adbar'
import Footer from '../components/footer/Footer'
import Herocontact from '../components/herocontact/Herocontact'
import Navbar from '../components/navbar/Navbar'
import Touch from '../components/touch/Touch'

const Contact = () => {
  return (
    <div>
      <Adbar/>
      <Navbar/>
      <Herocontact/>
      <Touch/>
      <Footer/>
    </div>
  )
}

export default Contact