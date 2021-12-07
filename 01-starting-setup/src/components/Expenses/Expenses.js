import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';

import './Expenses.css';

import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
  const [filter, setFilter] = useState('');

  const filterChangeHandler = (newFilter) => {
    console.log(filter);
    setFilter(newFilter);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filter.toString();
  });

  let expensesContent = <p>No expenses found</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      ></ExpenseItem>
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onFilterChange={filterChangeHandler} />
        {expensesContent}
      </Card>
    </div>
  );
};

export default Expenses;
