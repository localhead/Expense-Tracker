import React from "react";

import "./ExpenseFormEmpty.css";

const ExpenseFormEmpty = (props) => {
  const changeFlagEnabledHandler = (event) => {
    event.preventDefault();
    props.changeFlagFnEnabled(0);
  };

  return (
    <button className="add-new-expense-btn" onClick={changeFlagEnabledHandler}>
      Add New Expense
    </button>
  );
};

export default ExpenseFormEmpty;
