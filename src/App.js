import React, { useState, useEffect } from "react";
// App Css
import "./App.css";
// Component Files
import Expanses from "./components/expense/Expanses";
import NewExpense from "./components/newexpense/NewExpense";

const App = () => {
  const [newExpense, setNewExpense] = useState([]);

  const allData = () => {
    fetch("http://127.0.0.1/PHP-RESTApi/Expense/api-fatch-all.php")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setNewExpense(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    allData();
  }, []);

  const enterDataFromParentCom = (expense) => {
    fetch("http://127.0.0.1/PHP-RESTApi/Expense/api-insert.php", {
      method: "POST",
      body: JSON.stringify(expense),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Data insert In Database");
        allData();
        console.log(data);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h2 className="main-container">Lets Get Start</h2>
      <NewExpense onAddDataFromChild={enterDataFromParentCom} />
      <Expanses item={newExpense} />
      {/* <SubApp /> */}
    </div>
  );
};

export default App;
