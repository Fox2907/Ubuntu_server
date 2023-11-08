import React from 'react';
import "./FieldScreen.css";
const FieldScreen = ({titulo, imagen, descripcion}) => {
  return (
    <div className='container'>
        <div className="description">
            <h2 className="title-container">{titulo}</h2>
            <p className="description-paragraph">{descripcion}</p>
        </div>
        <div className="image">
            <img src={imagen} alt="" />
        </div>
    </div>
  )
}

export default FieldScreen