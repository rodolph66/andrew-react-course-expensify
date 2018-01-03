
import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'


test('Should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' })
  expect(state).toEqual([])
})


test('should remove expense by id', () => {
  const action = { type: 'REMOVE_EXPENSE', id: expenses[1].id }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([ expenses[0], expenses[2] ])
})


test('should not remove expense if id not found', () => {
  const action = { type: 'REMOVE_EXPENSE', id: '123abc' }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses)
})


test('should add an expense', () => {
  const expense = {'id': '4', description: 'Electric', amount: 51000, note: '', createdAt: 20000}
  const action = { type: 'ADD_EXPENSE', expense }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([...expenses, expense])
})


test('should edit an expense given valid id', () => {
  const updates = { description: 'Water Bill' }
  const action = { type: 'EDIT_EXPENSE', id: expenses[0].id, updates }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([ {...expenses[0], ...updates}, expenses[1], expenses[2] ])
})


test('should not update expense if id not found', () => {
  const updates = { description: 'Water Bill' }
  const action = { type: 'EDIT_EXPENSE', id: '123abc', updates }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses)
})


/*
// Alternate edit expense test

test('should edit an expense given valid id', () => {
  const amount = 122000
  const action = { type: 'EDIT_EXPENSE', id: expenses[1].id, updates: { amount } }
  const state = expensesReducer(expenses, action)
  expect(state[1].amount).toBe(amount)
})
*/