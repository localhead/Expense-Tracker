import React from "react";

import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  /* We adding handler on selected but inside we transfer data to upper component by using props */
  const yearChangeHandler = (event) => {
    props.changeYearFn(event.target.value);
  };

  return (
    <div className="expense-filter">
      <div className="expense-filter__title">Filter</div>
      <select
        className="expense-filter__selector"
        value={props.selectedYear}
        onChange={yearChangeHandler}
      >
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
      </select>
    </div>
  );
};

export default ExpenseFilter;
