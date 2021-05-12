import React, { useState } from "react";

import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart"

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const dateChangeHandler = (newEnteredDate) => {
    setFilteredYear(newEnteredDate);
    console.log("EnteredDate: " + newEnteredDate);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

    return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={filteredYear}
        onDateChange={dateChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
      <ExpensesList items={filteredExpenses}/>
    </Card>
  );
};

export default Expenses;
