import './App.css';
import Header from './components/Header';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import ExpenseChart from './components/Chart';
import React, { useState, useEffect } from 'react';

function App() {
  const [expenses, setExpenses] = useState([]);

  // Load from localStorage on initial render
  useEffect(() => {
    const storedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
    const validExpenses = storedExpenses.filter(
      (expense) => expense.category && expense.category !== ''
    );
    setExpenses(validExpenses);
  }, []);

  // Save to localStorage whenever expenses change
  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => {
    const updatedExpenses = [...expenses, expense];
    setExpenses(updatedExpenses);
  };

  const deleteExpense = (indexToDelete) => {
    const updatedExpenses = expenses.filter((_, index) => index !== indexToDelete);
    setExpenses(updatedExpenses);
  };

  const total = expenses.reduce((sum, exp) => sum + parseFloat(exp.amount), 0);

  return (
    <div className="App">
      <Header />
      <ExpenseForm onAdd={addExpense} />
      <ExpenseList expenses={expenses} onDelete={deleteExpense} />
      <h3 className="total-display">Total Spent: Rs {total.toFixed(2)}/-</h3>
      {expenses.length > 0 && <ExpenseChart expenses={expenses} />}
    </div>
  );
}

export default App;
