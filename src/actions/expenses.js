import uuid from 'uuid'
import database from '../firebase/firebase'
// EXPENSE ACTIONS ######################################

// ADD_EXPENSE ********************************************
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
})

export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {description='', note='', amount=0, createdAt=0} = expenseData
    const expense = { description, note, amount, createdAt }
    // the "return" is optional, here added to be used in the test files
    return database.ref('expenses').push(expense).then((ref) => {
      dispatch(addExpense({id: ref.key, ...expense}))
    })
  }
}

// ********************************************************

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
})

export const startRemoveExpense = ({ id } = {}) => {
  return (dispatch) => {
    return database.ref(`expenses/${id}`).remove().then(() => {
      dispatch(removeExpense({ id }))
    })
  }
}

// ********************************************************

// EDIT_EXPENSE
export const editExpense = (id , updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})

export const startEditExpense = (id, updates) => {
  return (dispatch) => {
    return database.ref(`expenses/${id}`).update(updates).then(() => {
      dispatch(editExpense(id, updates))
    })
  }
}

// ********************************************************

// SET_EXPENSES
export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
})

export const startSetExpenses = () => {
  return (dispatch) => {
    // the "return" is optional, here added to be used in the test files
    return database.ref('expenses').once('value').then((snapshot) => {
      const expenses = []
      snapshot.forEach(element => {
        expenses.push({
          id: element.key,
          ...element.val()
        })
      });
      dispatch(setExpenses(expenses))
    })
  }
}

// ********************************************************

/**
 * activities to update the store involves:
 * 1. component calls action generator
 * 2. action generator returns a function (to return func middleware is needed)
 * 3. component dispatches the function
 * 4. the function performs a task of adding/updating/deleting and expesne
 * 5. on its completiong the funciton dispatch an action to update store
 */