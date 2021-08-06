import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';
import './ExpenseFilter.css';

function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState("2020");

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);        
    };

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                <ExpensesChart expenses = {filteredExpenses}/>                
                <ExpensesList items = {filteredExpenses}/>
            </Card>
        </div>
    );
}

export default Expenses;