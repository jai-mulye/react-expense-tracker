import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  
  // Conditional Contenet if no items found
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found No Expenses</h2>;
  }

  const onDeleteExpense2 = (deleteId) => {
    // console.log(deleteId);
    props.onDeleteExpense1(deleteId);
  };

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
      <ExpenseItem
        onDeleteExpense2={onDeleteExpense2}
        expense={expense}
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      ></ExpenseItem>
      ))}
    </ul>
  );
};

export default ExpensesList;
