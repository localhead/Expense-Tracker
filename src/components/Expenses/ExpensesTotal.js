import React from "react";

import "./ExpensesTotal.css";

const ExpensesTotal = (props) => {
  return (
    <div className="expenses-total">
      <div className="expenses-total__title">Total expenses selected year:</div>
      <div className="expenses-total__total-amount">{props.totalExp}$</div>
    </div>
  );
};

export default ExpensesTotal;
