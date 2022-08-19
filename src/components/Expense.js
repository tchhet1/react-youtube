import React from 'react';
import ExpenseItem from './ExpenseItem';


function Expense(props) {
     
    return (
        <div>

         {
                props.item.map( 
                    (expense) => {
                        return (
                        <ExpenseItem 
                            key = { expense.id }
                            date={ expense.date }
                            title={ expense.title }
                            amount={ expense.amount } />
                        
                )
                        }
                        )
        }
 
             
        
            <ExpenseItem 
                date={ props.item[1].date }
                title={ props.item[1].title }
                amount={ props.item[1].amount }>
            </ExpenseItem>  


        </div>
        
    )
}

export default Expense;