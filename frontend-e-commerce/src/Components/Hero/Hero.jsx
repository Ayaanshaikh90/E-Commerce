import React from "react";
import "./Hero.css";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";

export default function Hero() {
  return (
    <div>
      <div className="hero">
        <div className="hero-left">
          <h2>New Arrivals Only</h2>
          <div>
            <div className="hand-hand-icon">
              <p>new</p>
              <img src={hand_icon} alt="" />
            </div>
            <p>collections</p>
            <p>for everyone</p>
          </div>
          <div className="hero-latest-btn">
            <div>Latest Collection</div>
            <img src={arrow_icon} alt="" />
          </div>
        </div>
        <div className="hero-right">
            
        </div>
      </div>
    </div>
  );
}