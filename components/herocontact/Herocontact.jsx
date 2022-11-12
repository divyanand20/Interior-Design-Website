import "./herocontact.css";
import Herocontactimg from "../../assets/interior2.png";
import React from 'react'

const Herocontact = () => {
  return (
    <div className="herocontact">
    <div className="mask3">
        <img className="herocontact-img" src={Herocontactimg} alt="Herocontactimg"/>
    </div>
    <div className="content3">
    <h1>Contact Us!</h1>
    <p>Want to know more about us?</p>
    
    </div>
</div>
  )
}

export default Herocontact