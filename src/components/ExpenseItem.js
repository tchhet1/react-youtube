import React, { useState } from 'react';
//import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {
    //let title = "Car Insurance";
    
    //const [title, setTitle] = useState(props.title);

   

    return (
        <div className="expense-item">
            {/* <ExpenseDate date = {props.date}/> */}
            <div>{ props.id }</div>
                <div>{ props.date }</div>
            <div className="expense-item-description">
                <h2>{ props.title }</h2>
                <div className="expense-item-price">
                    { props.amount }
                </div>
            </div>
           
        </div>
    );
}

export default ExpenseItem;