import React from "react";
import "./Hero.css";
import  logo from '../../bmi-calculator/starter-code/assets/images/logo.svg'

export default function Hero() {
  return (
    <div className="Hero">
      <div className="logo"><img src={logo} alt="logo" /></div>
    </div>
  );
}
