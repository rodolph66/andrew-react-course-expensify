import React from 'react'
import moment from 'moment'
import { shallow } from 'enzyme'
import { ExpenseListFilters } from '../../components/ExpenseListFilters'
import { filters, altFilters } from '../fixtures/filters'

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper
beforeEach(() => {
  setTextFilter = jest.fn()
  sortByDate = jest.fn()
  sortByAmount = jest.fn()
  setStartDate = jest.fn()
  setEndDate = jest.fn()
  wrapper = shallow(<ExpenseListFilters 
    filters={filters}
    setTextFilter={setTextFilter}
    sortByDate={sortByDate}
    sortByAmount={sortByAmount}
    setStartDate={setStartDate}
    setEndDate={setEndDate}
  />)
})


test('should render ExpenseListFilters correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseListFilters with alt data correctly', () => {
  wrapper.setProps({ filters: altFilters })
  expect(wrapper).toMatchSnapshot()
})


test('should handle text change', () => {
  const value = 'rent'
  wrapper.find('input').at(0).simulate('change', { target: { value } })
  expect(setTextFilter).toHaveBeenLastCalledWith(value)
})


test('should sort by date', () => {
  const value = 'date'
  wrapper.setProps({ filters: altFilters }) // this would set the sort to amount
  wrapper.find('select').simulate('change', { target:  { value } })
  expect(sortByDate).toHaveBeenCalled()
})


test('should sort by Amount', () => {
  wrapper.find('select').simulate('change', { target:  { value : 'amount' } })
  expect(sortByAmount).toHaveBeenCalled()
})


test('should handle date changes', () => {
  const startDate = moment(0)
  const endDate   = moment(0).add(5, 'days')
  wrapper.find('withStyles(DateRangePicker)')
  .prop('onDatesChange')({ startDate, endDate })
  expect(setStartDate).toHaveBeenLastCalledWith(startDate)
  expect(setEndDate).toHaveBeenLastCalledWith(endDate)
})


test('should handle date focus changes', () => {
  const startDate = "startDate" // or "endDate"
  //const calendarFocused = startDate
  wrapper.find('withStyles(DateRangePicker)')
  .prop('onFocusChange')(startDate)  
  expect(wrapper.state('calendarFocused')).toBe(startDate)
})