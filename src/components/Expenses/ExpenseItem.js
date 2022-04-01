import React from 'react';
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {

  const onDeleteExpense1 = (expense) => {
    // console.log(props.expense.id);
    const deleteId = props.expense.id;
    props.onDeleteExpense2(deleteId);
  };
  
  return (
    <li>
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">Rs. {props.amount}</div>
        <button className='delete-expense' onClick={onDeleteExpense1}>Delete</button>
      </div>
    </Card>
    </li>
  );
}

export default ExpenseItem;
