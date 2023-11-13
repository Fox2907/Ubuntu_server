import React from "react";
import "./Card.css";

const Card = ({iconoCard, titleCard, descriptionCard}) => {
  return (
    <div className="card-container">
      <div className="card-icon">
        <img src={iconoCard} alt="" className="icono-card" />
      </div>
      <div className="card-title">{titleCard}</div>
      <hr className="linea"></hr>
      <div className="card-description">{descriptionCard}</div>
    </div>
  );
};

export default Card;
