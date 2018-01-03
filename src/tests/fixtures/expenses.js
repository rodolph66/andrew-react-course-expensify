import moment from 'moment'

export default [
  {'id': '1', description: 'Gum',     amount: 195,      note: '', createdAt: moment(0).valueOf() },
  {'id': '2', description: 'Rent',    amount: 109500,   note: '', createdAt: moment(0).subtract(4, 'd').valueOf()},
  {'id': '3', description: 'Credit',  amount: 4500,     note: '', createdAt: moment(0).add(4, 'd').valueOf()},
]