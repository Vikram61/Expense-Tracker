import React from 'react';

const ExpenseItem = ({ description, amount, category, onDelete }) => {
  return (
    <div className="expense-item">
      <span className="expense-description">{description}</span> —
      <span className="expense-amount">${amount}</span>
      <span className="expense-category">({category})</span>
      <button onClick={onDelete} className="delete-btn">Delete</button>
    </div>
  );
};

export default ExpenseItem;
