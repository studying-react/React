import React, {useState} from "react";
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpenseFilter from "../NewExpense/ExpenseFilter";

function Expenses (props) {
    const [filteredYear, setFilteredYear] = useState('2020');

    const passedYear = (yearSelected) => {
        setFilteredYear(yearSelected);
    };

    const filteredExpenses = props.items.filter(expense => {
        return expense.dat.getFullYear().toString() === filteredYear;
    });

    return(
        <div>
            
            <Card className="expense">

                <ExpenseFilter 
                selectedYear = {filteredYear} 
                onFilterChange = {passedYear}
                
                />
                
                {filteredExpenses.map((expenses) => 
                <ExpenseItem 
                key = {expenses.id}
                title = {expenses.title}  
                amount={expenses.amount} 
                date={expenses.dat}/>
                )}

            </Card>
        </div>
    );
}


export default Expenses;