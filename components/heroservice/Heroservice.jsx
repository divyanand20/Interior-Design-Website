import "./heroservice.css";
import Heroserviceimg from "../../assets/interior1.jpeg";
import React from 'react'

const Heroservice = () => {
  return (
    <div className="heroservice">
    <div className="mask2">
        <img className="heroservice-img" src={Heroserviceimg} alt="Heroserviceimg"/>
    </div>
    <div className="content2">
    <h1>Services</h1>
    <p>We offer wide range of Services</p>
    </div>
</div>
  )
}

export default Heroservice