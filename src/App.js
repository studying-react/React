import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet paper',
    amount: 294.67,
    dat: new Date(2021, 0, 15),
  },
  {
    id: 'e2',
    title: 'Car Insurance',
    amount: 394.67,
    dat: new Date(2020, 2, 15),
  },
  {
    id: 'e3',
    title: 'shopping',
    amount: 294.67,
    dat: new Date(2020, 4, 15),
  },
  {
    id: 'e4',
    title: 'New TV',
    amount: 694.67,
    dat: new Date(2021, 2, 15),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      //returning a new array with the new expense added based on the previous expenses
      return [expense, ...prevExpenses];
    });
  };

  //declarative approach
  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
