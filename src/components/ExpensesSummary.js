import React from 'react'
import numeral from 'numeral'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import getExpensesTotal from '../selectors/expense-total'
import selectExpenses from '../selectors/expenses'


// Note: "export" is required  so that the component can be used in testing (it is optional)
export const ExpensesSummary = ({expenseCount, expensesTotal}) => {
  const expenseWord = expenseCount===1 ? 'expense' : 'expenses'
  const formatedTotal = numeral(expensesTotal/100).format('$0,0.00')
  return (
    <div className="page-header">
      <div className="content-container">
        {expenseCount>0 ? (
          <h1 className="page-header__title">
            Viewing <span>{expenseCount}</span> {expenseWord} totalling <span>{formatedTotal}</span>
          </h1>
        ) : (
          <h1 className="page-header__title">There are no expenses to view</h1>
        )}
        <div className="page-header__action">
          <Link className="button" to="/create">Add Expense</Link>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters)
  return ({
    expenseCount: visibleExpenses.length,
    expensesTotal: getExpensesTotal(visibleExpenses)
  })
}

export default connect(mapStateToProps)(ExpensesSummary)



/* Alternate version of the JSX
<div>
  {(() => {
    switch(expenseCount) {
      case 0 : 
        return <p>There are no expenses to view</p>
        break
      case 1 : 
        return (
          <p> Viewing 1 exepense totalling {expensesTotal}</p>
        )
        break
      default: 
      return (
        <p> Viewing {expenseCount} exepense totalling {expensesTotal}</p>
      )
    }
  })()}
</div>
*/