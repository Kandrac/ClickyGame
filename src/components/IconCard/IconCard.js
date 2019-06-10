import React from "react";
import "./style.css";

function IconCard(props) {
  // Props make react component reusable so you can use the same component with different data every time.
  //The same principle is used when creating functions we create a function with parameters so we can pass them different arguments every time and get different results.
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} 
        onClick={() => props.clickHandler(props.id)} 
        />      
      </div>
    </div>
  );
}

export default IconCard;