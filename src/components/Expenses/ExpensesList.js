import React from "react";

import ExpenseItem from "./ExpenseItems";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0)
    return <p className="expenses-list__not-found">No expenses found</p>;

  return (
    <ul className="expenses-list__ul">
      {" "}
      {props.items.length > 0 &&
        props.items.map((prop) => (
          <ExpenseItem
            /* key is a special parameter which allows react to update array of obj without updating everything inside but only new objects */
            key={prop.id}
            title={prop.title}
            date={prop.date}
            amount={prop.amount}
          ></ExpenseItem>
        ))}
    </ul>
  );
};

export default ExpensesList;
