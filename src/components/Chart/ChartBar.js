import React from "react";

import "./ChartBar.css";

const ChartBar = (props) => {
  let barFillHeight = "20%";

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  console.log(barFillHeight);

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight, backgroundColor: "#ffffff" }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
      <div className="chart-bar__persentage">{barFillHeight}</div>
    </div>
  );
};

export default ChartBar;
