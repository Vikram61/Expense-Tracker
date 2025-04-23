import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const ExpenseChart = ({ expenses }) => {
  // Filter expenses to exclude those with an empty category
  const validExpenses = expenses.filter(expense => expense.category !== "");

  // Calculate total per category
  const categoryTotals = validExpenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
    return acc;
  }, {});

  // Prepare chart data
  const data = {
    labels: Object.keys(categoryTotals), // Categories
    datasets: [
      {
        label: 'Expense Distribution',
        data: Object.values(categoryTotals), // Amounts
        backgroundColor: [
          '#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#FF8C33', '#7DFF33'
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="expense-chart">
      <h3>Expense Breakdown by Category</h3>
      {validExpenses.length === 0 ? (
        <p>No valid expenses to display</p>
      ) : (
        <Pie data={data} />
      )}
    </div>
  );
};

export default ExpenseChart;
