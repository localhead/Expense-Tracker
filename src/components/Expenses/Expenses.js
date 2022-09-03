import React, { useState } from "react";
import Card from "../UI/Card";

import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

function Expenses(props) {
  /* We are going to change this vars in ExpenseFilter component*/
  const [year, setYear] = useState("2022");
  /* const [dataFiltered, setDataFiltered] = useState(props); */

  /* Function that will get data from ExpenseFilter and change it */
  const yearSavingHandler = function (yearFromSelected) {
    setYear(yearFromSelected);
  };

  /* We filter the array which we have in App.js it also includes the date got from NewExpense component
    Then we filter that array by selected year which is a conditional state  
  */
  const filteredArray = props.items.filter((data) => {
    return data.date.getFullYear().toString() === year;
  });

  console.log(filteredArray);

  /* Here we can see that data changed */
  /*  console.log(year); */

  return (
    <li>
      <Card className="expenses-content">
        {/* This is SMART component */}
        <ExpenseFilter
          selectedYear={year}
          changeYearFn={yearSavingHandler}
        ></ExpenseFilter>
        {/* This is DUMB component */}
        {/* here we dynamicaly render our hardcoded (yet) data from App.js*/}
        <ExpensesChart expenses={filteredArray}></ExpensesChart>
        <ExpensesList items={filteredArray}></ExpensesList>
      </Card>
    </li>
  );
}

export default Expenses;
