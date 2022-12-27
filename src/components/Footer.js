import React from "react";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillTwitterSquare,
} from "react-icons/ai";

import "../styles/Footer.css";

// import mapImg from "../images/map.jpg";

// import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function Footer() {
  return (
    <div className="footer-div">
      <div className="footer-container" id="contact-link">
        <div className="footer-left">
          <h2 className="name">Homely</h2>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis vero
            natus aut sunt ex sit? Aperiam id ratione nemo libero.
          </p>
          <div className="footer-icons">
            <AiFillInstagram className="icon-each" />
            <AiFillFacebook className="icon-each" />
            <AiFillTwitterSquare className="icon-each" />
          </div>
          <div>
            <p>+92 51 786 564 345</p>
          </div>
        </div>
        <div className="footer-right">
          <div className="about-div">
            <h3 className="footer-heading">About Us</h3>
            <ul className="about-list">
              <li>Our Story</li>
              <li>Blog</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className="location-div">
            <h3 className="footer-heading">Our Location</h3>
            {/* <GoogleMap
              zoom={10}
              center={{ lat: 40, lng: -80 }}
              mapContainerClassName="map-container"
            ></GoogleMap> */}
            {/* <div className="map-img">
              <img src={mapImg} alt="" className="img-map" />
            </div> */}
            <div className="location-details">
              <p>Plot 234, Main XYZ Road, Islamabad</p>
              <br />
              <a
                href="https://www.google.com/maps/search/?api=1&query=33.6723371,73.066366"
                className="loc-link"
              >
                View on Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
