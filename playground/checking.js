const moment = require('moment')
const getExpenseTotal = require('../src/selectors/expense-total')

const expenses1 = [{
  id: '1',
  description: 'Gum',
  amount: 195,
  note: '',
  createdAt: 0
}]

const expenses2 = [{
  id: '1',
  description: 'Gum',
  amount: 195,
  note: '',
  createdAt: 0
},{
  id: '2',
  description: 'Rent',
  amount: 109500,
  note: '',
  createdAt: moment(0).subtract(4, 'days').valueOf()
},{
  id: '3',
  description: 'Credit Card',
  amount: 4500,
  note: '',
  createdAt: moment(0).add(4, 'days').valueOf()
}]



console.log('Empty expenses total:',getExpenseTotal())
console.log('Single expenses total:',getExpenseTotal(expenses1))
console.log('Several expenses total:',getExpenseTotal(expenses2))
