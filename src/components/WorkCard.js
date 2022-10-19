import "./WorkCardStyles.css";

import React from 'react';
import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
  return (
    <div className="project-card">
        <img src={props.imgsrc} alt="image"/>
        <h2 className="project-title">{props.title}</h2>
        <div className="pro-details">
            <p>{props.text}</p><br/>
            <div className="pro-btns">
                <button onClick={props.view} className="btn">
                    View
                </button>
                <NavLink to="url.com" className="btn">
                    Source
                </NavLink>
            </div>
        </div>
    </div>
  )
}

export default WorkCard