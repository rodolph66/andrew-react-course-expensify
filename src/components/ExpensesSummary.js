import React from 'react'
import numeral from 'numeral'
import { connect } from 'react-redux'
import getExpensesTotal from '../selectors/expense-total'
import selectExpenses from '../selectors/expenses'


// Note: "export" is required  so that the component can be used in testing (it is optional)
export const ExpensesSummary = ({expenseCount, expensesTotal}) => {
  const expenseWord = expenseCount===1 ? 'expense' : 'expenses'
  const formatedTotal = numeral(expensesTotal/100).format('$0,0.00')
  return (
    <div>
      {expenseCount>0 ? (
        <h2>Viewing {expenseCount} {expenseWord} totalling {formatedTotal}</h2>
      ) : (
        <h2>There are no expenses to view</h2>
      )}
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