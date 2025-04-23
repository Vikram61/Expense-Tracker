import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseList = ({ expenses, onDelete }) => {
  return (
    <div className="expense-list">
      <h2>Expenses</h2>
      {expenses.length === 0 ? (
        <p>No expenses yet...</p>
      ) : (
        expenses.map((expense, index) => (
          <div key={index} className="expense-item-container">
            <ExpenseItem
              description={expense.description}
              amount={expense.amount}
              category={expense.category}
              onDelete={() => onDelete(index)}
            />
          </div>
        ))
      )}
    </div>
  );
};

export default ExpenseList;

