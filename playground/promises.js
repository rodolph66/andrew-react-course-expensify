import { error } from "util";


const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve takes only one argument which can be: number, string, object, ...etc
    resolve('This is resolved with message: task completed')
  }, 5000)
  
})

console.log('before')

// Syntax 1
promise.then((data) => {
  console.log('1',data)
}).catch((error) => {
  console.log('error:', error)
})

// Syntax 2 (2 callbacks in then: 1st for the resolve, 2nd for the reject)
promise.then((data) => {
  console.log('1',data)
}, (error) => {
  console.log('error:', error)
})



console.log('after')