import * as firebase from 'firebase'

const  config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
}

firebase.initializeApp(config)

// *****************************************************
// *****************************************************
const database = firebase.database()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export { firebase, googleAuthProvider, database as default }



//const db = firebase.database()

// db.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// db.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// const onValueChange = db.ref('expenses').on('value', (snapshot) => {
//   const expenses = []

//   snapshot.forEach(element => {
//     expenses.push({
//       id: element.key,
//       ...element.val()
//     })
//   })

//   console.log(expenses)
// })

// db.ref('expenses').push({description: 'Rent', amount: 109500, note:'', createdAt: 1012345})

// db.ref('expenses').push({description: 'Phone Bill', amount: 5900, note:'', createdAt: 1056789})
// db.ref('expenses').push({description: 'Food', amount: 1200, note:'bi-monthly', createdAt: 1001234})

//db.ref('notes/-L2BXJveZuuS4j6Efe3B').update({title: 'Things To Do'})

// db.ref('notes').push({
//   title: 'Courses',
//   body: 'Javascript, Angular, Reactjs'
// })


// const notes = [{
//   id: '12',
//   title: 'First note!',
//   body: 'This is a note called first note'
// },{
//   id: '13',
//   title: '2nd note!',
//   body: 'This is a note of no importance'
// }]

// db.ref('notes').set(notes)

// const onValueChange = db.ref().on('value', (snapshot) => {
//   const data = snapshot.val()
//   console.log(`${data.name} is a ${data.job.title} at ${data.job.company}`)
// }, (e) => {
//   console.log('Error with data fetching', e)
// })

// setTimeout(() => { db.ref('name').set('Aasem Al Kontar')}, 3500)
// setTimeout(() => { db.ref('job/title').set('office boy')}, 7000)

// db.ref().off('value', onValueChange)

//*** subscribing to the full database
// const onValueChange = db.ref().on('value', (snapshot) => {
//   console.log(snapshot.val())
// }, (e) => {
//   console.log('Error with data fetching', e)
// })

// setTimeout(() => {
//   db.ref('age').set(35)
// }, 3500)

// setTimeout(() => {
//   // *** unsubscribing
//   db.ref().off('value', onValueChange)
// }, 7000)

// setTimeout(() => {
//   db.ref('age').set(40)
// }, 10500)


// db.ref().once('value')
// .then((snapshot) => {
//   const val = snapshot.val()
//   console.log(val)
// })
// .catch((e) => {
//   console.log('Error fetching data', e)
// })

// db.ref().set({
//   name: 'Rodolph George',
//   age: 26,
//   stressLevel: 6,
//   job: {
//     title: 'software developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Phelidelphoa',
//     country: 'United States'
//   }
// }).then(() => {
//   console.log('Data is saved!')
// }).catch(e => {
//   console.log('this failed:',e.message)
// })

  
// db.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seatle'
// }).then(() => {
//   console.log('property removed successfully')
// }).catch(e => {
//   console.log(e.mmesage)
// })

// db.ref('isSingle').remove().then(() => {
//   console.log('property removed successfully')
// }).catch(e => {
//   console.log(e.mmesage)
// })