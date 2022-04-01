import React, {useState} from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from "./components/Expenses/Expenses";

// Initial Dummy Data
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Phone",
    amount: 12000,
    date: new Date(2020, 10, 14),
  },
  { 
    id: "e2", 
    title: "Monitor 144Hz", 
    amount: 18000, 
    date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Gym Membership",
    amount: 9000,
    date: new Date(2021, 7, 28),
  },
  {
    id: "e4",
    title: "Cycle",
    amount: 8000,
    date: new Date(2022, 5, 12),
  },
];

const App = (props) => {
  // useState Hook for Expenses
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  // Event Listener for Adding Expense
  const addExpenseHandler = (expense) => {
    // using a copy of expenses and unpacking data
    setExpenses( (prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  const deleteExpenseHandler = (deleteId) => {
    // console.log(deleteId);
    setExpenses( expenses.filter((exp)=> exp.id !== deleteId) )
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses expenseItem={expenses} onDeleteExpense={deleteExpenseHandler}/>
    </div>
  );
}

export default App;
