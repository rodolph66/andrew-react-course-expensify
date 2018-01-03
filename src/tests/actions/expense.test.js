import uuid from 'uuid'
import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

// TEST removeExpense()
test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc' })
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  })
})

// TEST editExpense()
test('should setup edit expense action object', () => {
  const updates = { note: 'New note value' }
  const action = editExpense('123abc', updates)
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates : { note: 'New note value'}
  })
})

// TEST addExpense(param)  - with params
test('should setup add expense action object with provided values', () => {
  const sampleExpense = {description: 'Rent', amount: 50000, createdAt: 100956, note: 'some text'}
  const action = addExpense(sampleExpense)
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...sampleExpense,
      id: expect.any(String)
    }
  })
})

// TEST addExpense()  - No params
test('should setup add expense action object with default values', () => {
  const action = addExpense()
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      description:'', 
      note:'', 
      amount:0, 
      createdAt:0,
      id: expect.any(String)
    }
  })
})