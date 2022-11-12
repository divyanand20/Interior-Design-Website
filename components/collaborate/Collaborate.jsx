import "./collaborate.css"
import Col from "../../assets/real1.jpg"

import React from 'react'

const Collaborate = () => {
  return (
    <div className="collaborate">
        <div className="collaborate1">
        <h2>We are collaborators</h2>
        <div className="collaboratecontent">
            <p>When we work together, exciting things happen. On every project, we collaborate with our clients and with each other to arrive at a unique and tailored solution. It elevates every project beyond even the greatest individual conception. It’s the best and most enjoyable way we know of bringing our vision to life.
</p>
        </div>
        </div>
        <div className="colimg">
            <img src={Col} alt="Col" className="co"/>
        </div>
    </div>
  )
}

export default Collaborate