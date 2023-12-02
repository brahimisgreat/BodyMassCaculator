import React from "react";
import classes from "./Calculator.module.css";

export default function Calculator() {
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <h3>Enter your details below</h3>
      </div>
      <div className={classes.metric}>
        <div className={classes.radio1}>
          <input type="radio" id="metric" value="metric" name="metric" />
          <label>Metric</label>
        </div>
        <div className={classes.radio2}>
          <input type="radio" id="metric" value="metric" name="metric" />
          <label>Imperial</label>
        </div>
      </div>
      <div className={classes.inputs}>
        <div className={classes.height}>
          <label>Height</label>
          <div className={classes.heightInput}>
            <input />
            <h3>cm</h3>
          </div>
        </div>
        <div className={classes.weight}>
          <label>Weight</label>
          <div className={classes.weightInput}>
          <input />
          <h3>kg</h3>
          </div>
          
        </div>
      </div>
      <div className="result">
        <div className="bmi-title">
          <h2>Welcome</h2>
          <p>
            Enter your height and weight and you'll see your BMI result here
          </p>
        </div>
      </div>
    </div>
  );
}
