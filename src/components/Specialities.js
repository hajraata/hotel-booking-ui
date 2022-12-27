import React from "react";
import "../styles/Specialities.css";
// import { FcCalendar } from "react-icons/fc";

function Specialities(porps) {
  return (
    <div className="specialities-container">
      <div className="specialities-cards">
        {porps.items.map((item) => (
          <div className="specialities-each">
            {item.icon}
            <div className="specialities-details">
              <h3>{item.heading}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}

        {/* <div className="specialities-each">2</div>
        <div className="specialities-each">3</div>
        <div className="specialities-each">4</div> */}
      </div>
    </div>
  );
}

export default Specialities;
