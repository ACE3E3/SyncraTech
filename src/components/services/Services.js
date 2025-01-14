import React from 'react'
import './Services.css';

function Services() {
  const cardCreator = (level, imageSrc, description) => {
    return (
      <div className="price-card">
        <div className="circle">
          <div className="circle-circle" />
        </div>
        <div className="card-content">
          <div className="card-elements">
            <h3>{level}</h3>
            <div className="image-container">
        <img src={imageSrc} alt="Service" />
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
      <div className="content-wrapper-container">
        <h2>Some cards</h2>
        <div className="card-wrappers">
        {cardCreator(
          "Smart Factory Evolution",
          1200,
          "Transform your operations with end-to-end MES implementation, ensuring seamless production workflows and real-time insights."
        )}
        {cardCreator(
          "Automation Mastery",
          1500,
          "Revolutionize your processes with cutting-edge industrial automation, driving precision, speed, and operational excellence."
        )}
        {cardCreator(
          "Future-Ready Digitalization",
          1000,
          "Empower your business with IoT-driven solutions, predictive analytics, and smart technologies for a digital-first strategy."
        )}
        {cardCreator(
          "Tailored Web Ecosystems",
          800,
          "Build dynamic and scalable web solutions designed to streamline your industrial and business operations."
        )}
        </div>
      </div>
    </div>
  );
}

export default Services