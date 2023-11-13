import React from 'react';
import "./FieldScreen.css";
import Card from '../../components/Card';
import Abogado from "/src/assets_project/Abogado.json";

const FieldScreen = ({titulo, imagen, descripcion, cards}) => {
  return (
    <div className='container-fieldscreen'>
        <div className="profession">
            <div className="description">
              <h2 className="title-container">{titulo}</h2>
              <p className="description-paragraph">{descripcion}</p>
          </div>
          <div className="image">
              <img src={imagen} alt="" />
          </div>
        </div>
        <div className="cards-container">
        {cards.map((card, index) => (
          <Card
            key={index}
            iconoCard={card.iconoCard}
            titleCard={card.tituloCard}
            descriptionCard={card.descriptionCard}
          />
        ))}
        </div>
        
    </div>
  )
}

export default FieldScreen