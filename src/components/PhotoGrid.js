import React from "react";
import "../styles/PhotoGrid.css";

function PhotoGrid(props) {
  return (
    <div className="grid-container">
      <div className="photo-grid">
        {props.items.map((item) => (
          <div className={item.photoClass}>
            <img src={item.photoSrc} alt="grid" className="grid-photo-item" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PhotoGrid;
