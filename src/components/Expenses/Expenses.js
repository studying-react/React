import React from "react";
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

function Expenses (props) {
    return(
        <Card className="expense">
            <ExpenseItem
            title={props.expense[0].title} 
            amount={props.expense[0].amount}
            date={props.expense[0].dat}
            />

            <ExpenseItem
            title={props.expense[1].title} 
            amount={props.expense[1].amount}
            date={props.expense[1].dat}
            />

            <ExpenseItem
            amount={props.expense[2].amount}
            title={props.expense[2].title} 
            date={props.expense[2].dat}
            />

            <ExpenseItem
            title={props.expense[3].title} 
            amount={props.expense[3].amount}
            date={props.expense[3].dat}
            />
        </Card>
   
    );
}


export default Expenses;