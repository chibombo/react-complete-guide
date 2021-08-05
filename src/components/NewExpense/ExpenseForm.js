import React, {useState} from "react";
import './ExpenseForm.css';

function ExpenseForm(props) {
    
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState(0);
    const [enteredDate, setEnteredDate] = useState(Date.now);
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });
    const titleChangedHandler = event => {
        setEnteredTitle(event.target.value);  
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.event
        // });    
        // setUserInput((prevState) => {
        //     return {...prevState, enteredTitle: event.target.event};
        // });
    };

    const amountChangedHandler = event => {
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.event
        // });
        // setUserInput((prevState) => {
        //     return {...prevState, enteredAmount: event.target.event};
        // });
    };

    const dateChangedHandler = event => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.event
        // });
        // setUserInput((prevState) => {
        //     return {...prevState, enteredDate: event.target.event};
        // });
    }

    const submitHandler = event => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        props.onSaveExpenseData(expenseData);
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
        console.log(expenseData);
    };

    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-exense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangedHandler}/>
                </div>
                <div className="new-exense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangedHandler}/>
                </div>
                <div className="new-exense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangedHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;