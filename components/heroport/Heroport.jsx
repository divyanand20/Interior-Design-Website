import "./heroport.css";

import Heroportimg from "../../assets/heroportimg.jpg";
import React from 'react'


const Heroport = () => {
  return (
    <div className="heroport">
        <div className="mask1">
            <img className="hero-img" src={Heroportimg} alt="Heroportimg"/>
        </div>
        <div className="content1">
        <h1>Portfolio</h1>
        <p>Check out our latest projects</p>     
        </div>
    </div>
  );
}

export default Heroport