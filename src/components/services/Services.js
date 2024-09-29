import React from 'react'
import './Services.css';

function Services() {
  const cardCreator = (level, cost, description) => {
    return (
      <div className="price-card">
        <div className="circle">
          <div className="circle-circle" />
        </div>
        <div className="card-content">
          <div className="card-elements">
            <h3>{level}</h3>
            <div className="price-iva">
              <h1>
                <span className="price-sign">$</span>
                {cost}
              </h1>
              <p className="iva">+ IVA</p>
            </div>
            <p
              className="text-cards"
              style={{
                padding: "8%",
                fontWeight: "300"
              }}
            >
              {description}
            </p>
            <div className="btn-container">
              <a href="#contact" role="button">
                CREAR CUENTA
              </a>
              <div className="ease" />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="second-section-main-wrapper">
      <div className="mask-background" />
      <div className="content-wrapper-container">
        <h2>Some cards</h2>
        <div className="card-wrappers">
          {cardCreator(
            "Entrepreneur",
            600,
            "Fase preliminar para la fundación de la startup. Constitución empresarial y trámites notariales. Asesoría legal."
          )}
          {cardCreator(
            "Startup",
            1000,
            "Gestoría laboral y contractual para las startups que ya están en marcha."
          )}
          {cardCreator(
            "Escalated",
            1500,
            "Startups con un crecimiento sostenido que requieren de una plataforma legal continua."
          )}
          {cardCreator(
            "Escalated",
            1500,
            "Startups con un crecimiento sostenido que requieren de una plataforma legal continua."
          )}
        </div>
      </div>
    </div>
  );
}

export default Services