import moment from 'moment'
import getExpensesTotal from '../../selectors/expense-total'
import expenses from '../fixtures/expenses'

test('should return 0 if no expenses', () => {
  const result = getExpensesTotal()
  expect(result).toBe(0)
})

test('should correctly add up a single expense', () => {
  const expense = [expenses[2]]
  const result = getExpensesTotal(expense)
  expect(result).toBe(expenses[2].amount)
})

test('should correctly add up a multiple expense', () => {
  const total = expenses[0].amount + expenses[1].amount + expenses[2].amount
  const result = getExpensesTotal(expenses)
  expect(result).toBe(total)
})