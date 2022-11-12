import React from 'react'
import Adbar from '../components/adbar/Adbar'
import Choose from '../components/choose/Choose'
import Collaborate from '../components/collaborate/Collaborate'
import Footer from '../components/footer/Footer'
import Heroimage from '../components/heroimage/Heroimage'
import Homeabout from '../components/homeabout/Homeabout'
import Inspire from '../components/inspire/Inspire'
import Navbar from '../components/navbar/Navbar'
import Shortservice from '../components/shortservice/Shortservice'
import Standards from '../components/standards/Standards'
import Testimonials from '../components/Testimonials'
import Touch from '../components/touch/Touch'
import Vision from '../components/vision/Vision'
import What from '../components/what/What'
import Work from '../components/Work'

const Home = () => {
  return (
    <div>
      <Adbar/>
      <Navbar/>
      <Heroimage/>
      <Homeabout/>
      <What/>
      <Choose/>
      <Shortservice/>
      <Vision/>
      <Work/>
      <Inspire/>
      <Standards/>
      <Testimonials/>
      <Collaborate/>
      <Touch/>
      <Footer/>
    </div>
  )
}

export default Home