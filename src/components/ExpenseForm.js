import React, { useState } from 'react';

function ExpenseForm(props) {
    
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleHandler = (e) => {
        setEnteredTitle(e.target.value);
        
    }

    const amountHandler = (e) => {
        setEnteredAmount(e.target.value);
    }

    const dateHandler = (e) => {
        setEnteredDate(e.target.value);
    }

    const submitChanges = (e) => {
       e.preventDefault();
       
       const expenseData = {
           title: enteredTitle,
           amount: enteredAmount,
           date: enteredDate
       }

       console.log(expenseData);

       props.saveExpenseData(expenseData);

       setEnteredTitle('');
       setEnteredAmount('');
       setEnteredDate('');
    }


    return (
        <div>
            <form onSubmit= { submitChanges }>
                <div className="new-expense-controls">
                    <div className="new-expense-contorl">
                        <label>Title</label>
                        <input type="text" value= { enteredTitle } onChange= { titleHandler }/>
                    </div>

                    <div className="new-expense-contorl">
                        <label>Amount</label>
                        <input type="number" value= { enteredAmount }min="0.01" step="0.01" onChange= { amountHandler }/>
                    </div>

                    <div className="new-expense-contorl">
                        <label>Date</label>
                        <input type="date" value= { enteredDate } onChange= { dateHandler }/>
                    </div>
                </div>

                <div className="new-expense-actions">
                    <button type="submit" >Add expense</button>
                </div>
            </form>
        </div>

    );
}

export default ExpenseForm;