import React from "react";
import "./HomeScreen.css";

const HomeScreen = () => {
  return (
    <div className="main">
      <img src="/src/assets_project/Empresa.jpg" alt="a" className="background" />
      <div className="overlay">
        <h2 className="title">Experiencia. Expertise. Éxito</h2>
        <p className="paragraph">
          ¡Bienvenido a Whiskas! 
          En Whiskas,
          estamos dedicados a ser tu aliado en la búsqueda del éxito. Ya sea
          asesoramiento legal, desarrollo tecnológico, marketing digital,
          contabilidad confiable o asistencia secretarial, nuestro equipo de
          expertos está listo para brindarte soluciones efectivas. Descubre cómo
          Whiskas puede ayudarte a alcanzar tus objetivos.
          ¡Convierte tus metas en realidad hoy mismo!
        </p>
      </div>
    </div>
  );
};

export default HomeScreen;
