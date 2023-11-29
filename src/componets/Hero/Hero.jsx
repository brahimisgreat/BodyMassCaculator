import React from "react";
import "./Hero.css";
import logo from "../../bmi-calculator/starter-code/assets/images/logo.svg";
import Title from "./Title";

export default function Hero() {
  return (
    <div className="Hero">
      <div className="rectangle">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <Title />
      </div>
    </div>
  );
}
