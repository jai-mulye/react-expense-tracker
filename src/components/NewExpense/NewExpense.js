import React, {useState} from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  // useState Hook for Displaying Input Form
  const [showForm, setShowForm] = useState(false);

  // Event Listener for Saving Expense Data
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // console.log(expenseData);
    props.onAddExpense(expenseData);
    setShowForm(false);
  };

  // Condition to Show Form
  const showFormHandler = () => {
    setShowForm(true);
  }

  // Condition to Hide Form
  const hideFormHandler = () => {
    setShowForm(false);

  }

  return (
    <div className="new-expense">
      {!showForm && <button onClick={showFormHandler}>Add New Expense</button>}
      {showForm && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={hideFormHandler}></ExpenseForm>}
    </div>
  );
};

export default NewExpense;
