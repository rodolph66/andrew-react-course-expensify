import moment from 'moment'
import { 
  setTextFilter, 
  setStartDate, 
  setEndDate, 
  sortByAmount, 
  sortByDate 
} from '../../actions/filters'

// TEST setStartDate()
test('should generate set start date action object', () => {
  const action = setStartDate(moment(10004756))
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(10004756)
  })
})

// TEST setEndDate()
test('should generate set end date action object', () => { 
  const action = setEndDate(moment("2017-12-25"))
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment("2017-12-25")
  })
})

// TEST sortByAmount()
test('should generate sort by amount action object', () => {
  const action = sortByAmount()
  expect(action).toEqual({
    type: 'SET_SORT_BY',
    sortBy: 'amount'
  })
})

// TEST sortByDate()
test('should generate sort by date action object', () => {
  const action = sortByDate()
  expect(action).toEqual({
    type: 'SET_SORT_BY',
    sortBy: 'date'
  })
})

// TEST setTextFilter(param)
test('should generate set text filter action object with provided value', () => {
  const action = setTextFilter('bill')
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'bill'
  })
})

// TEST setTextFilter()
test('should generate set text filter action object with default value', () => {
  const action = setTextFilter()
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  })
})