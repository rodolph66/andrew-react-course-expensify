import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expenses'

// Note: "export" is required  so that the component can be used in testing (it is optional)
export const ExpenseList = (props) => (
  <div>
    { props.expenses.length === 0 ? (
      <p>No expenses</p>
    ) : (
      props.expenses.map( expense => ( <ExpenseListItem key={expense.id} {...expense} /> ))
    )}
  </div>
)


// OPTION 3 with the selectExpenses used to filter state values
const mapStateToProps = state => ({expenses: selectExpenses(state.expenses, state.filters)})

export default connect(mapStateToProps)(ExpenseList)


/*
// OPTION 3
const mapStateToProps = state => ({expenses: state.expenses, filters: state.filters})
/*

/* OPTION 2
export default connect((state) => ({expenses: state.expenses}))(ExpenseList)
*/

/* OPTION 1
// connect(param)(component) allows the component to access part of the store. 
// This part is specified in the param as is passed to the component as props
const ConnectedExpenseList = connect((state) => ({expenses: state.expenses}))(ExpenseList)

export default ConnectedExpenseList
*/