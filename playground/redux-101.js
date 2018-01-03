import { createStore } from 'redux'

//Action Generators #########################################
const incrementCount = ({incrementBy = 1} = {} ) => ({ 
  type: 'INCREMENT',
  incrementBy
})

const decrementCount = ({decrementBy = 1} = {} ) => ({ 
  type: 'DECREMENT',
  decBy: decrementBy
})

const resetCount = () => ({ type: 'RESET' })

const setCount = ({count}) => ({
  type: 'SET',
  count
})
//Action Generators #########################################

//Reducers ##################################################
const countReducer = (state = {count: 0}, action) => {
  switch (action.type) {
    case 'INCREMENT':
      const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy: 1
      return {count: state.count + incrementBy}
    case 'DECREMENT':
      const decBy = typeof action.decBy === 'number' ? action.decBy: 1
      return {count: state.count - decBy}
    case 'RESET':
      return {count: 0}
    case 'SET':
      return {count: action.count}
    default:
      return state
  }
}
//Reducers ##################################################

//The Store #################################################
const store = createStore(countReducer)
//The Store #################################################

const unsubscribe = store.subscribe(() => {
  console.log(store.getState())
})

// unsubscribe() // removes the subscribe() function to store

// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5
// })

store.dispatch(incrementCount({incrementBy: 5}))

store.dispatch(incrementCount())

store.dispatch(resetCount())

store.dispatch(decrementCount())

store.dispatch(decrementCount({decrementBy: 10}))

store.dispatch(setCount({count: 101}))