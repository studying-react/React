import React from "react";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  //imperative approach
  const para = document.createElement("p");
  para.textContent = "Hello World!";
  document.getElementById("root").append(para);
  //

  //props
  const expensesData = [
    {
      id: "e1",
      title: "Toilet paper",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e2",
      title: "Car Insurance",
      amount: 394.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e3",
      title: "shopping",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    { id: "e4", title: "New TV", amount: 694.67, date: new Date(2021, 2, 28) },
  ];

  //

  //declarative approach
  return (
    <div>
      <h2>Let's get started!</h2>

      <Expenses expense={expensesData} />
       
      
      
    </div>
  );
}

export default App;
