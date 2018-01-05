
export default (expenses = []) => {
  if (expenses.length === 0) {
    return 0
  } else {
    let total = 0
    // const count = 0 // add count to count the expenses with amount > 0 
    
    // OPTION 1
    //expenses.forEach(expense => { total += expense.amount });

    // OPTION2
    total = expenses.map(expense => expense.amount).reduce((sum, value) => sum+value, 0)

    return total
  }
}
