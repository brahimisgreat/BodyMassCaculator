import React from "react";
import classes from './Calculator.module.css'

export default function Calculator() {
  return (
    <div className={classes.container}>
      
        <div className={classes.title}>
          <h3>Enter your details below</h3>
        </div>
        <div className={classes.metric}>
          <label>
            <input type="radio" id="metric" value="metric" /> Metric
          </label>
          <label>
            <input type="radio" id="metric" value="metric" /> Imperial
          </label>
        </div>
        <div className={classes.inputs}>
          <div className="height">
            <label>Height</label>
            <input />
          </div>
          <div className="weight">
            <label>Weight</label>
            <input />
          </div>
          <div className="result">
            <div className="bmi-title">
              <h2>Welcome</h2>
              <p>Enter your height and weight and you'll see your BMI result here</p>
            </div>
            <div className="bmi-result"></div>
          </div>
        </div>
    </div>
  );
}
