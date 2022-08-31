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

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const submitEventHandler = (event) => {
    /* preventing page from default reload */
    event.preventDefault();

    const changedData = {
      title: title,
      amount: amount,
      date: new Date(date),
    };

    //clearing inputs after pressing
    setTitle("");
    setAmount("");
    setDate("");

    console.log(changedData);
  };

  return (
    <form onSubmit={submitEventHandler}>
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
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={date}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
