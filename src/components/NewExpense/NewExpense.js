import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [FormIsVisible, setFormIsVisible] = useState(false);

  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const startEditingHandler = () => {
    setFormIsVisible(true);
  };

  const stopEditingHandler = () => {
    setFormIsVisible(false);
  };

  return (
    <div className="new-expense">
      {!FormIsVisible && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {FormIsVisible && (
        <ExpenseForm
          onStopEditing={stopEditingHandler}
          onSaveExpenseData={onSaveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
