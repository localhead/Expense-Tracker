import React from "react";
import Chart from "../Chart/Chart";

/* filteredArray = props.expenses*/
const ExpensesChart = (props) => {
  /* We create an object were we will fill values from filtered array */
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];
  let i = 1;
  chartDataPoints.map((dataPoint) => (dataPoint.id = "el" + i++));

  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth();

    chartDataPoints[expenseMonth].value += expense.amount;
  }

  let total = 0;
  for (const expense of props.expenses) {
    total += expense.amount;
  }

  props.calcTotalMonth(total);

  return <Chart dataPoints={chartDataPoints}></Chart>;
};

export default ExpensesChart;
