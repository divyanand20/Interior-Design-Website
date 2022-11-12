import "./shortservice.css";
import D from "../../assets/design1.jpg";
import L from "../../assets/light1.jpg";
import F from "../../assets/furniture1.jpg";
import R from "../../assets/renovation1.jpg";

import React from 'react'

const Shortservice = () => {
  return (
    <div className="shortservice"> 
        <h1>Bespoken Interior Services</h1>    
        <p>At Satlak Interiors, you will get one-stop-solution for your dream house</p>  
        <div className="serv">
            <div className="design">
            <img src={D} alt="D" className="designd" />
            <h2>Interior Design</h2>
            </div>
            <div className="light">
            <img src={L} alt="L" className="lightd" />
            <h2>Lighting Design</h2>
            </div>
            <div className="furniture">
            <img src={F} alt="F" className="furnitured" />
            <h2>Bespoken Joinery and Furniture</h2>
            </div>
            <div className="renovation">
            <img src={R} alt="R" className="renovationd" />
            <h2>Renovation</h2>
            </div>
        </div>
    </div>
  )
}

export default Shortservice