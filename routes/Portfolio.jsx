import React from 'react'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import Heroport from '../components/heroport/Heroport'
import Adbar from '../components/adbar/Adbar'
import Work from '../components/Work'


const Portfolio = () => {
  return (
    <div>
      <Adbar/>
      <Navbar/>
      <Heroport />
      <Work/>
      <Footer/>
    </div>

  )
}

export default Portfolio