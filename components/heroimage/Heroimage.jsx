import "./heroimage.css"
import IntroImg from "../../assets/heroimage1.png"
import React from 'react'

import {Link} from "react-router-dom";

const Heroimage = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src={IntroImg} alt="IntroImg"/>
        </div>
        <div className="content">

        <p>Book your Consultation today!</p>
        <h1>Satlak Interiors</h1>
        <div>
            <Link to="/portfolio" className="btn"> Projects
            </Link>
            <Link to="/contact" className="btn btn-light" > Contact
            </Link>
        </div>

        </div>
    </div>
  );
}

export default Heroimage