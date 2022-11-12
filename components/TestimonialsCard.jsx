import "./testimonials.css";
import React from 'react'
import { NavLink } from "react-router-dom";

const TestimonialsCard = (props) => {
  return (
    <div className="testimonials-card">
        <div className="test-pic">
    <img src={props.imgsrc} alt="props.imgsrc"/>
    </div>
    <h2 className="testimonials-title">{props.title}</h2>
    <div className="testimonials-details">
        <p>{props.text}</p>
        <div className="testimonials-btns">
        <NavLink to={props.view} className="btn">View</NavLink>               
    </div>
    </div>
    
</div>
  );
};

export default TestimonialsCard