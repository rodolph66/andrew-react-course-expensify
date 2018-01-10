import uuid from 'uuid'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { 
  startAddExpense, 
  addExpense, 
  editExpense, 
  removeExpense,
  startRemoveExpense,
  setExpenses, 
  startSetExpenses, 
  startEditExpense} from '../../actions/expenses'
import expenses from '../fixtures/expenses'
import database from '../../firebase/firebase'

const createMockStore = configureMockStore([thunk])

beforeEach((done) => {
  const expensesData = {}
  expenses.forEach(({ id, description, note, amount, createdAt }) => {
    expensesData[id] = { description, note, amount, createdAt }
  })
  database.ref('expenses').set(expensesData).then(() => done())
})

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
  const action = addExpense(expenses[2])
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2]
  })
})


// add expense to firebase database
test('should add expnese to database and store', (done) => {
  const store = createMockStore({})
  const expenseData = {
    description: 'Mouse',
    amount: 3000,
    note: 'this one is better', 
    createdAt: 1000
  }
  // the .then here was only possible because "return" was added to the tested function
  store.dispatch(startAddExpense(expenseData))
  .then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    })
    return database.ref(`expenses/${actions[0].expense.id}`).once('value') // returns a promise
  })
  .then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseData)
    done()
  })
})


// add expense with default
test('should add expese with defaults to database store', (done) => {
  const store = createMockStore({})
  const defaultData = {
    description:'',
    note: '',
    amount: 0,
    createdAt: 0
  }
  // the .then here was only possible because "return" was added to the tested function
  store.dispatch(startAddExpense())
  .then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...defaultData
      }
    })
    return database.ref(`expenses/${actions[0].expense.id}`).once('value') // returns a promise
  })
  .then((snapshot) => {
    expect(snapshot.val()).toEqual(defaultData)
    done()
  })
})


test('should setup set expense action object with data', () => {
  const action = setExpenses(expenses)
  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses
  })
})


test('should fetch the expenses from firebase', (done) => {
  const store = createMockStore({})
  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'SET_EXPENSES',
      expenses
    })
    done()
  })
})


test('should remove expense from expenses firebase databse', (done) => {
  const store = createMockStore({})
  const expense = expenses[0]
  store.dispatch(startRemoveExpense({id: expense.id})).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'REMOVE_EXPENSE',
      id: expense.id
    })
    done()
  })
})

test('should edit expenses from firebase', (done) => {
  const store = createMockStore({})
  const id = expenses[1].id
  const updates = {amount: 500.00, note: 'modefied'}
  store.dispatch(startEditExpense(id, updates)).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'EDIT_EXPENSE',
      id,
      updates
    })
    return database.ref(`expenses/${id}`).once('value')
  }).then(snapshot => {
    expect(snapshot.val().amount).toBe(updates.amount)
    done()
  })
})

// // TEST addExpense()  - No params
// test('should setup add expense action object with default values', () => {
//   const action = addExpense()
//   expect(action).toEqual({
//     type: 'ADD_EXPENSE',
//     expense: {
//       description:'', 
//       note:'', 
//       amount:0, 
//       createdAt:0,
//       id: expect.any(String)
//     }
//   })
// })