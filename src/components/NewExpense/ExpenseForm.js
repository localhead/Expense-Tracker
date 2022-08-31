import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = function () {
  /* 
    Here we have title (title) that we have initialy empty on form, 
    and a title which we will get after user changes it (setTitle)  
    */
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  /* Saving title value inside of functions */
  const titleChangeHandler = function (event) {
    setTitle(event.target.value);
  };

  const amountChangeHandler = function (event) {
    setAmount(event.target.value);
  };

  const dateChangeHandler = function (event) {
    setDate(event.target.value);
  };

  const submitEventHandler = function (event) {
    /* preventing page from default reload */
    event.preventDefault();
    event.stopPropagation();

    const changedData = {
      title: title,
      amount: amount,
      date: new Date(date),
    };

    setTitle("");
    setAmount("");
    setDate("");
    console.log(changedData);
  };

  return (
    /* We do not add onClick on button click event */
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            required
            type="date"
            min="2019-01-01"
            max="2030-12-31"
            onClick={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" onClick={submitEventHandler}>
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
