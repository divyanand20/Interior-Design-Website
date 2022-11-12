import "./touch.css";
import CI from "../../assets/contactimg.jpg"
import React from 'react'

const Touch = () => {
  return (
    <div className="touch">
        <div className="touch-container">
            <h2>
            Get in touch
            </h2>
            <p>
            If you would like to know more about us and wish to discuss a project, we would be delighted to start a conversation.
            </p>
            </div>
            <div className="foo">
                <div className="contacti">
                    <img src={CI} alt="CI" className="ciimg"/>
                </div>
                <div className="touch-form">
                <form action="">
                    <h1 className="formh1">Book an Initial Consultation</h1>
                    <input type="text" placeholder="Name" className="name"/>
                    <br></br>
                    <input type="text" placeholder="Email"/>
                    <br></br>
                    <input type="text" placeholder="Phone Number"/>
                    <br></br>
                    <textarea placeholder="Your Message"></textarea>
                    <br></br>
                    <button type="submit" className="btn">Send</button>
                </form>
            </div>
            </div>
            
    </div>
  )
}

export default Touch