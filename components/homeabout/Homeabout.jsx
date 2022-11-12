import "./homeabout.css";
import In1 from "../../assets/interior3.png";
import In2 from "../../assets/interior4.jpeg";
import React from 'react'
import { Link } from "react-router-dom";

const Homeabout = () => {
  return (
    <div className="homeabout">
        <div className="imgcontainer">
            <img src={In1} alt="In1" className="img1"/>
            <img src={In2} alt="In2" className="img2"/>
        </div>
        <div className="aboutcontent">
            <h2>About Us</h2>
            <div className="abcon">
                <p>
                Satlak Interior and Design Ltd specialise in the creation, design and interior architecture of exquisite environments for residential, leisure and commercial interiors.   
                </p>
                <p>
                Established in 2020 and based in the Bangalore, JEIAD has become a leading Architectural Interior Design practice with offices in London and Birmingham.
                </p>
                <p>
                With John’s all-encompassing and pragmatic approach to Interior design, an expertise based on accurate spatial planning and improving the flow of the interior space.  Through structure, detailed design, the use of lighting and individually designed furniture, fixtures and fittings, the practice has completed a wide variety of projects both at home and abroad.
                </p>
            </div>
            <Link to="/contact" className="btn">
            About Us
            </Link>
        </div>
        <div className="hiddenimg">
        <img src={In1} alt="In1" className="img3"/>
        </div>
    </div>
  )
}

export default Homeabout