import React, { useState } from "react";

import "./ExpenseForm.css";
import ExpenseFormEmpty from "./ExpenseFormEmpty";
import ExpenseFormVisible from "./ExpenseFormVisible";

const ExpenseForm = function (props) {
  /* New state for updating UI */
  const [enabled, setFlag] = useState(1);

  const newExtenseDataForm = (savedExpenseData) => {
    props.onSaveData(savedExpenseData);
  };

  const changeFlagDisabled = (changedFlag) => {
    setFlag(changedFlag);
  };

  const changeFlagEnabled = (changedFlag) => {
    setFlag(changedFlag);
  };

  return (
    <div>
      {" "}
      {enabled === 0 && (
        <ExpenseFormVisible
          onSaveData={newExtenseDataForm}
          changeFlagFnDis={changeFlagDisabled}
        ></ExpenseFormVisible>
      )}
      {enabled === 1 && (
        <ExpenseFormEmpty
          changeFlagFnEnabled={changeFlagEnabled}
        ></ExpenseFormEmpty>
      )}
    </div>
  );
};

export default ExpenseForm;
