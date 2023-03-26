import React from "react";

// CSS
import "./Expanses.css";

// Chilled Component
import ExpanseItem from "./ExpanseItem";

const Expanses = (props) => {
  // object of Array

  return (
    <div className="expenses">
      {/* For Array */}
      {/* with the of map function we randers list  */}
      {/* inside map we use arrow function */}
      {/* then return chile component and their value */}
      {props.item.map((expense) => {
        return (
          <ExpanseItem
            key={expense.id}
            date={expense.date}
            title={expense.title}
            amount={expense.amount}
          />
        );
      })}
    </div>
  );
};

export default Expanses;
