import React from 'react';
import ExpenseForm from './ExpenseForm';

function NewExpense(props) {

    const saveExpenseDataHandler = (data) => {
        const expensedata = {
            ...data,
            id: Math.random().toString()
        }

        console.log(expensedata);

        props.expenseHandler(expensedata);
    }

   
    
    return (
        <div className="new-expense">
            <ExpenseForm saveExpenseData = { saveExpenseDataHandler }/>
        </div>
    )
}

export default NewExpense;