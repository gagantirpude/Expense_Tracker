import React from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const addDataFromExpenseFrom = (formdata) => {
    // I Want Add Some Date who came from chile Components
    // Create Object
    const expense = {
      // if i want full data from child use ... sprat operator
      // child data inside parameter that is formdata.
      ...formdata,
      id: Math.random().toString(), // here we add some data.

      // upper line ... with formdata that means all data inside of formdata parameter.
      // if we want abb some data we use (,) after sprat operator. but data will be key:'value', pair rule fallow.
    };
    // console.log(formdata); // that data from child how inside of the parameter that we receive on variable formdata that we declare.

    // Now I Want to Transfer Data To My Parent Component ho is App.js
    // For this we need to pass argument to app.js function and receive data as parameter
    // we all know all will be pass props 
    props.onAddDataFromChild(expense);


    console.log(expense); // here we can see owr addition data how we just add
  };

  return (
    <div className="new-expense">
      <ExpenseForm onAddData={addDataFromExpenseFrom} />
    </div>
  );
};

export default NewExpense;
