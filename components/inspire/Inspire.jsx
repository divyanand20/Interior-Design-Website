import "./inspire.css"
import Exp from "../../assets/what1.jpg"
import React from 'react'

const Inspire = () => {
  return (
    <div className="inspire">
        <div className="inspimg">
            <img src={Exp} alt="Exp" className="inimg"/>
        </div>
        <div className="inspcontent">
            <h2>We create inspiring experiences</h2>
            <div className="paracont">
                <p>
                Our spaces are transformative. By going beyond trend we design environments that are original and timeless and which spark all the senses. We understand the ultimate essence of a project, which unlocks the authentic design story. The result is a unique, immersive experience that is exactly right for the place and the people within it.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Inspire