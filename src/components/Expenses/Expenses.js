import React from 'react';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
const Expenses = (props) => {
	return (
		<div>
            <ExpenseFilter/>
			<Card className="expenses">
				{props.expenses.map((item) => (
					<ExpenseItem key={item.id} item={item} />
				))}
			</Card>
		</div>
	);
};

export default Expenses;
