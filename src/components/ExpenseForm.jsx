import React, { useState } from 'react';

const ExpenseForm = ({ onAdd }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description.trim() || isNaN(amount) || parseFloat(amount) <= 0 || !category) {
      setError('Please fill all fields correctly');
      return;
    }
    onAdd({ description, amount: parseFloat(amount), category });
    setDescription('');
    setAmount('');
    setCategory('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <div className="form-group">
        <label>Description</label>
        <input
          type="text"
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Amount</label>
        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Category</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select Category</option>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Shopping">Shopping</option>
          <option value="Bills">Bills</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {error && <p className="error-text">{error}</p>}

      <button type="submit" className="submit-btn">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
