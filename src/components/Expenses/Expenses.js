import React, {useState} from "react";
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpenseFilter from "../NewExpense/ExpenseFilter";

function Expenses (props) {
    const [filteredYear, setFilteredYear] = useState('2020');

    const passedYear = (yearSelected) => {
        console.log(yearSelected);
        setFilteredYear(yearSelected);
    };

    return(
        <div>
            
            <Card className="expense">
            <ExpenseFilter selectedYear = {filteredYear} onFilterChange = {passedYear}/>
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
        </div>
    );
}


export default Expenses;