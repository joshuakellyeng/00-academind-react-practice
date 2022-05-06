import React from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'


const ExpenseItem = (props) => {
    console.log(props.iteminfo.date)
    return (
        <div className='expense-item'>
            <ExpenseDate date={props.iteminfo.date} />
            <div className='expense-item__description'>
                <h2>{props.iteminfo.title}</h2>
                <div className='expense-item__price'>${props.iteminfo.amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;
