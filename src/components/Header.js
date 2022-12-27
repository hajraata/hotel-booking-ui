import React from "react";
import "../styles/Header.css";

function Header(props) {
  return (
    <div className="header-div">
      <div className="header-container">
        <div className="navBar-menu sticky">
          <h1 className="hotel-name">Homely</h1>
          <ul className="navBar-list">
            {props.items.map((item) => (
              <li key={item.listId}>
                <a href={`#${item.id}`} className="link-nav">
                  {item.itemName}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
