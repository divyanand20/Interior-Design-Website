import React from 'react'
import "./footer.css"
import {FaHome, FaPhone, FaMailBulk, FaFacebook, FaLinkedin,FaInstagram} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
        <div className="location">
            <FaHome size={20} style={{color:"aliceblue", marginRight: "2rem"} }/>
            <div>
                <p>534, 3rd A main</p>
                <p>Bangalore, India</p>
            </div>
        </div>
       <div className="phone">
       <h4><FaPhone size={20} style={{color:"aliceblue", marginRight: "2rem"} }/> 
       9632276626</h4> 
       </div>
            <div className='email'>
            <h4>
        <FaMailBulk size={20} style={{color:"aliceblue", marginRight: "2rem"} }/> 
        satlak@gmail.com</h4> 
        </div>
        </div>

        
            <div className="right">
                <h4>
                    About the company
                </h4>
                <p>lalallalalalalal</p>
                <div className="social">
                <FaFacebook
                size={30} 
                style={{color:"aliceblue", marginRight: "1rem"} }
                /> 
                <FaLinkedin
                size={30} 
                style={{color:"aliceblue", marginRight: "1rem"} }
                /> 
                <FaInstagram
                size={30} 
                style={{color:"aliceblue", marginRight: "1rem"} }
                /> 
                </div>

            </div>
    
        </div>
        </div>
  )
}

export default Footer