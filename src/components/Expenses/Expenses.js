import React, { useState } from "react";
import Card from "../UI/Card";

import ExpenseItem from "./ExpenseItems";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";

function Expenses(props) {
  /* We are going to change this vars in ExpenseFilter component*/
  const [year, setYear] = useState("");
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
    <Card className="expenses-content">
      {/* This is SMART component */}
      <ExpenseFilter
        selectedYear={year}
        changeYearFn={yearSavingHandler}
      ></ExpenseFilter>
      {/* This is DUMB component */}
      {/* here we dynamicaly render our hardcoded (yet) data from App.js*/}
      {filteredArray.map((prop) => (
        <ExpenseItem
          /* key is a special parameter which allows react to update array of obj without updating everything inside but only new objects */
          key={prop.id}
          title={prop.title}
          date={prop.date}
          amount={prop.amount}
        ></ExpenseItem>
      ))}

      {/*       <ExpenseItem
        title={props.items[1].title}
        date={props.items[1].date}
        amount={props.items[1].amount}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[2].title}
        date={props.items[2].date}
        amount={props.items[2].amount}
      ></ExpenseItem> */}
    </Card>
  );
}

export default Expenses;
