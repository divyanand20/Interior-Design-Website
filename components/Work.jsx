import "./work.css";
import WorkCard from "./WorkCard"
import WorkCardData from "./WorkCardData"
import React from 'react'

const Work = () => {
  return (
    <div className="work">
        <div className="work-container">
            <h1 className="project-heading">Recent Projects</h1>
            <div className="para">
                   <p>We design and build amazing workplaces. See how effective design and a transformational office fit out starts and ends with people, backed by understanding and meticulous detail at every stage.</p>
        </div>
        <div className="project-container">
           {WorkCardData.map((val, ind) => {
            return(
                <WorkCard
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

export default Work