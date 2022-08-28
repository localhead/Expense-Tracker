// 1 - created component just by creating a function
// All custom components must be in Capital letters (ExpenseItem) in order to React to detect them
/* 

*/
// We need useState. It allows
import React, { useState } from "react";
import Card from "../UI/Card";

// Adding CSS
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

// props - is a parameter that hold all the values we recieve in component
// name we recive from App.js must match!!!
function ExpenseItem(props) {
  // useState is a React hook. It need dafault state.
  // Place to argument something what yu want to be changed
  // useState returns array of 2 values. 1 - init state, 2 - changed state.
  const [title, setTitle] = useState(props.title);

  const bthTitleHandler = function () {
    setTitle("fuck");
  };

  return (
    /* here we have className instead of just class (like in html)*/
    <Card className="expense-item">
      <div className="expense-item__left">
        {" "}
        {/* Making Date a different component */}
        <ExpenseDate date={props.date}></ExpenseDate>
        <h2 className="expense-item__title">{title}</h2>
      </div>
      <div className="expense-item__rigth">
        {" "}
        <div className="expense-item__price">{props.amount}$</div>
        {/* Adding Event lister on button*/}
        <button onClick={bthTitleHandler}>Change Title</button>
      </div>
    </Card>
  );
}

// 2 - Congrats now u need to export it and import
// it in App.js which is root component for app
export default ExpenseItem;
