import React from "react";

// CSS
import "./ExpenseItem.css";

// Components
import ExpenseDate from "./ExpenseDate";

// we used arrow function here
const ExpanseItem = (props) => {
  return (
    <div className="expense-item">
      <ExpenseDate date={new Date(props.date)} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item_price">${props.amount}</div>
      </div>
    </div>
  );
};

export default ExpanseItem;
