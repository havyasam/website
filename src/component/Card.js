import React from "react";
import Skills from "./Skills";
import '../css/Card.css'

function Card({Skills}) {
  return (
    <>
    
        
          <div className="skill-card">
          <h2>{Skills.H}</h2>
          <img src={Skills.I}></img>
          </div>  
        
    
    </>
  );
}

export default Card;
