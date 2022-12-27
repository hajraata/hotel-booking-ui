import React from "react";
import "../styles/Services.css";

function Services(props) {
  return (
    <div className="services-div">
      <div className="services-container" id="services-link">
        <h2>Services & Facilities</h2>
        <div className="services-cards">
          {props.items.map((item) => (
            <div className="services-each">
              {item.serviceIcon}
              <div className="service-details">
                <h3>{item.serviceName}</h3>
                <p>{item.serviceDetails}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
