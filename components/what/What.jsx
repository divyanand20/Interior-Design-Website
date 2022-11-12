import "./what.css";
import Whatwe from "../../assets/what.jpg"

import React from 'react'
import { Link } from "react-router-dom";

const What = () => {
  return (
    <div className="what">
        <div className="whatwedo">
        <h2>What We Do</h2>
        <div className="whatcontent">
            <p>Overseen by John, Senior Designers lead teams of designers and specialists working on projects that feature spatial planning and remodeling, lighting design, Interior decoration and contract administration.</p>
            <p>A key factor in the success of each project is the coordination and engagement of consultants. The practice has an established network of solid working relationships with industry-recognised Architects, consultant, and contractors. We recognise the benefits of working with professional and productive contractors, and are happy to bring such professionals together on our clients behalf.</p>
            <p>JEIAD provide full project co-ordination, with a flexible and adaptable approach to suit each clients needs and each projects individual requirements. Projects are completed with a strong sense of purpose and creativity, functionality, attention to detail and finish.</p>
        </div>
        <Link to="/services" className="btn">
            Our Services
        </Link>
        </div>
        <div className="whatimg">
            <img src={Whatwe} alt="Whatwe" className="do"/>
        </div>
    </div>
  )
}

export default What