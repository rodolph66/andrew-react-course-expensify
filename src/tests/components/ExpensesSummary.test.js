import React from 'react'
import { shallow } from 'enzyme'
import { ExpensesSummary } from '../../components/ExpensesSummary'
import expenses from '../fixtures/expenses'


test('should render ExpenseList with expenses', () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={235} />)
  expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseList with empty message', () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={23} expensesTotal={150050099} />)
  expect(wrapper).toMatchSnapshot()
})