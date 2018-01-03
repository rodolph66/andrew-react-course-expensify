import React from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'

export default class ExpenseForm extends React.Component {
  // note 2
  state = {
    description: this.props.expense ? this.props.expense.description : '',
    note: this.props.expense ? this.props.expense.note : '',
    amount: this.props.expense ? (this.props.expense.amount/100).toString() : '',
    createdAt: this.props.expense ? moment(this.props.expense.createdAt) : moment(),
    calendarFocused: false,
    error: '',
    buttonLabel: this.props.expense ? 'Save Changes' : 'Add Expense'
  }

  onDescriptionChange = (e) => {
    // note 1
    const description = e.target.value
    this.setState(() => ({description}))
  }

  onNoteChange = (e) => {
    //note 1
    const note = e.target.value
    this.setState(() => ({note}))
  }

  onAmountChange = (e) => {
    const amount = e.target.value
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({amount}))
    }
  }

  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }))
    }
  }

  onFocusedChange = ({ focused }) => {
    this.setState({ calendarFocused: focused })
  }

  onSubmit = (e) => {
    e.preventDefault()
    if (!this.state.description || !this.state.amount) {
      this.setState({error: 'Please provide description and amount'})
    } else {
      this.setState({error: ''})
      this.props.onSubmit({
        description: this.state.description,
        amount: parseInt(this.state.amount * 100, 10),
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      })
    }
  }

  render() {
    return (  
      <div>
        {this.state.error && <h4>{this.state.error}</h4>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            type="text"
            placeholder="amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange} 
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusedChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            placeholder="add a note for your expense (optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
          >
          </textarea>
          <button>{this.state.buttonLabel}</button>
        </form>
      </div>
    )
  }
}



// note 1: the target value must be saved in a var/const before setState

// note 2: if anything fails try the following which is what is used in the course
/*
  constructor(props) {
    super(props)
    this.state = {
      description: props.expense ? props.expense.description : ''
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? (props.expense.amount/100).toString() : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: ''
    }
  }
*/