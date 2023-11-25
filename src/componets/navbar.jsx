import React from "react";
import logo from "../bmi-calculator/starter-code/assets/images/logo.svg";
import "./navbar.css";

export default function Navbar() {
  return (
    <>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
    </>
  );
}
