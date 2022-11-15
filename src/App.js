import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";


const App = () => {
  

  //props
  const expensesData = [
    {
      id: "e1",
      title: "Toilet paper",
      amount: 294.67,
      dat: new Date(2021, 2, 28),
    },
    {
      id: "e2",
      title: "Car Insurance",
      amount: 394.67,
      dat: new Date(2021, 2, 28),
    },
    {
      id: "e3",
      title: "shopping",
      amount: 294.67,
      dat: new Date(2021, 2, 28),
    },
    { 
      id: "e4", 
      title: "New TV", 
      amount: 694.67, 
      dat: new Date(2021, 2, 28) 
    }
  ];

  const addExpenseHandler = (expense) => {
    const expenseData = {
      ...expense,
      id: Math.random().toString()
    }
    console.log(expenseData);
  };

  //declarative approach
  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses expense={expensesData} />
       
      
      
    </div>
  );
}

export default App;
