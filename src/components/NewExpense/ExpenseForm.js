import React, { useState } from "react";

import "./ExpenseForm.css";
import ExpenseFormEmpty from "./ExpenseFormEmpty";
import ExpenseFormVisible from "./ExpenseFormVisible";

const ExpenseForm = function (props) {
  const [enabled, setDisabled] = useState(0);

  const newExtenseDataForm = (savedExpenseData) => {
    props.onSaveData(savedExpenseData);
  };

  const changeFlagDisabled = (changedFlag) => {
    setDisabled(changedFlag);
  };

  const changeFlagEnabled = (changedFlag) => {
    setDisabled(changedFlag);
  };

  return (
    <div>
      {" "}
      {enabled === 0 && (
        <ExpenseFormVisible
          onSaveData={newExtenseDataForm}
          currentFlag={enabled}
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
