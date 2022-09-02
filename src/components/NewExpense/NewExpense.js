import React from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = function (props) {
  /* function in which we will save data from ExpenseForm */
  const savingDataForm = (savedExpenseData) => {
    const savedExpanseData = {
      ...savedExpenseData,
    };

    props.onAddExpense(savedExpanseData);
  };

  return (
    <div className="new-expense">
      {/* We have to sent function in this component as a pointer cuz we want save data there */}
      <ExpenseForm onSaveData={savingDataForm} />
    </div>
  );
};

export default NewExpense;
