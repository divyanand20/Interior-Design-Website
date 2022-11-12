import "./adbar.css";

import React from 'react'
import {FaFacebook, FaLinkedin,FaInstagram,FaPhone} from "react-icons/fa";
import { Link } from "react-router-dom";

const Adbar = () => {
  return (
    <div className="adbar">
        <div className="leftsocial">
        <FaFacebook
                size={20} 
                style={{color:"white", marginRight: "1rem"} }
                /> 
                <FaLinkedin
                size={20} 
                style={{color:"white", marginRight: "1rem"} }
                /> 
                <FaInstagram
                size={20} 
                style={{color:"white", marginRight: "1rem"} }
                /> 
        </div>
        <div className="booknow">
          <Link to="/contact">Book your Appointment</Link>
          </div>
        <div className="contactnum">
            
        <FaPhone size={20} style={{color:"white", marginRight: "2rem"} }/>+91 9632276626</div>
    </div>
  )
}

export default Adbar