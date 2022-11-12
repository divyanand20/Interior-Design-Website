import "./testimonials.css";
import TestimonialsCard from "./TestimonialsCard"
import TestimonialsCardData from "./TestimonialsCardData"
import React from 'react'

const Testimonials = () => {
  return (
    <div className="testimonials">
        <div className="testimonials-container">
            <h1 className="testimonials-heading">Testimonials</h1>
            <div className="para1">
                   <p>We recognise the importance of striking the balance between commercial demands and creative ambitions. Our unrivalled experience, profound grasp of commercial needs and creative agility, mean we reach inspired solutions for our clients, without compromise.</p>
        </div>
        <div className="test-container">
           {TestimonialsCardData.map((val, ind) => {
            return(
                <TestimonialsCard
                key={ind}
                imgsrc={val.imgsrc}
                title={val.title}
                text={val.text}
                view={val.view}
                />
            );
           })}
        </div>
        </div>
    </div>
  )
}

export default Testimonials