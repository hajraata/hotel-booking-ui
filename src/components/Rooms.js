import React from "react";

import "../styles/Rooms.css";

function Rooms(props) {
  return (
    <div className="rooms-div">
      <div className="rooms-container">
        <h2>Hotel Rooms</h2>
        <div className="rooms-cards" id="rooms-link">
          {props.items.map((item) => (
            <div className="room-card">
              <div className="room-img">
                <img src={item.roomPhoto} alt="room" className="img-each" />
              </div>
              <div className="room-details">
                <h3>{item.heading}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Rooms;
