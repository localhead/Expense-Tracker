import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

/* props is an array of obj here = chartDataPoints = props.dataPoints */
const Chart = (props) => {
  /* dataPointValues is basically props array here of its values*/
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);

  const totalMaximum = Math.max(...dataPointValues);

  console.log(props.dataPoints);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.id}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        ></ChartBar>
      ))}
    </div>
  );
};

export default Chart;
