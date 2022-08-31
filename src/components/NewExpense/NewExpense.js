import React from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = function () {
  return (
    <div>
      <form className="new-expense">
        <ExpenseForm></ExpenseForm>
      </form>
    </div>
  );
};

export default NewExpense;
