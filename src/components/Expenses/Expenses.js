import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpencesChart from "./ExpencesChart";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {

  // useState Hook for Selecting Year
  const [filteredYear, setFilteredYear] = useState("2022");
  const yearChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  // Event Handler for Filtering Year
  const filteredExpenses = props.expenseItem.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  const onDeleteExpense1 = (deleteId) => {
    // console.log(deleteId);
    props.onDeleteExpense(deleteId);
  };

  return (
    <div>
        <Card className="expenses">
          <ExpensesFilter
            selected={filteredYear}
            onYearChange={yearChangeHandler}
          ></ExpensesFilter>
          <ExpencesChart expenses={filteredExpenses}></ExpencesChart>
          <ExpensesList items={filteredExpenses} onDeleteExpense1={onDeleteExpense1}></ExpensesList>
        </Card>
    </div>
  );
};

export default Expenses;
