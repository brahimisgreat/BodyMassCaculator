import React from "react";
import "./Title.css";

export default function Title() {
  return (
    <div className="container">
      <div className="Main">
        <h1>
          Body Mass <br /> Index Calculator
        </h1>
      </div>
      <div className="para">
        <p>
          Better understand your weight in relation to your height using <br />{" "}
          our body mass index (BM) calculator. While BMI is not the sole
          determinant of a healthy weight, it offers a valuable <br />
          starting point to evaluate your overall health and well-being.
        </p>
      </div>
    </div>
  );
}
