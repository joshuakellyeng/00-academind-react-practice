import React from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
const Expenses = (props) => {
    console.log(props)
	return (
		<div className="expenses">
            {
                props.expenses.map(item => (
                    <ExpenseItem key={item.id}iteminfo={item}/>
                ))
            }
		</div>
	);
};

export default Expenses;
