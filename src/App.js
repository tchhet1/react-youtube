import React from 'react';
import './App.css';
import ExpenseItem from './components/ExpenseItem'
import Expense from './components/Expense';
import NewExpense from './components/NewExpense';

function App() {
  //let expenseDate = new Date(2022, 8, 14);
  //let expenseTitle = "Rent";
  //let expenseAmt = 300;

  let expenses = [
    {id: 'e1', 
    title: 'Rent',
    amount: 350,
    date: new Date(2022, 8, 14)},

    {id: 'e2', 
    title: 'Utility',
    amount: 150,
    date: new Date(2022, 8, 14)},

    {id: 'e3', 
    title: 'Cable',
    amount: 100,
    date: '2021-5-12'},

  ];

  const addExpenseHandler = (data) => {
      console.log(data);
      
  }

  return (
    <div>
      <h2>Lets get started!!</h2>
      <NewExpense expenseHandler = { addExpenseHandler } />
      <Expense item={expenses}></Expense>
    </div>
  );
}

export default App;
