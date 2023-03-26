import React, { useState } from "react";

import "./NewExpenseForm.css";

const ExpenseForm = (props) => {
  const [enterTitle, setEnterTitle] = useState("");
  const [enterAmount, setEnterAmount] = useState("");
  const [enterDate, setEnterDate] = useState("");

  const titleChangeHandler = (event) => {
    // console.log(event.target.value);
    setEnterTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    // console.log(event.target.value);
    setEnterAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    // console.log(event.target.value);
    setEnterDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseDate = {
      ctitle: enterTitle,
      camount: enterAmount,
      cdate: new Date(enterDate),
    };

    props.onAddData(expenseDate);

    console.log(expenseDate);
    setEnterDate("");
    setEnterAmount("");
    setEnterTitle("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title </label>
          <br />
          <input type="text" onChange={titleChangeHandler} value={enterTitle} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <br />
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={enterAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <br />
          <input type="date" onChange={dateChangeHandler} value={enterDate} />
        </div>
      </div>
      {/*  */}
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
