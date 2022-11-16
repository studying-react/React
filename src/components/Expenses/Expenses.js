import React, { useState } from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from '../NewExpense/ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const passedYear = (yearSelected) => {
    setFilteredYear(yearSelected);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.dat.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expense">
        <ExpenseFilter selectedYear={filteredYear} onFilterChange={passedYear} />

        <ExpensesChart expenses={filteredExpenses} />

        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
