// higher order component (HOC) => a component that renders another component
// HOC features/advantages: reuse code, render hijacking, prop manipulation, abstract state

import React from 'react'
import ReactDOM from 'react-dom'

// normal component
const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
)

// normal function (wrapper) returns another version of the passed-in component
const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private infd please don't share</p>}
      <WrappedComponent {...props}/>
    </div>
  )
}

// normal function (wrapper) returns another version of the passed-in component
const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props}/>
       ) : (
        <p>Please login to see Info</p>
       )}
    </div>
  )
}

// the returned (modified version of Info) is stored in a component (AdminInfo)
const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthentication(Info)

ReactDOM.render(
  <AuthInfo isAuthenticated={true} info="Here are the details" />, 
  document.getElementById('app')
)

// ReactDOM.render(
//   <AdminInfo isAdmin={true} info="Here are the details" />, 
//   document.getElementById('app')
// )