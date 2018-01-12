import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { startLogout } from '../actions/auth'

export const Header = ({startLogout}) => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/dashboard">
          <h1>Expensify</h1>
        </Link> 
        <button className="button button--link" onClick={startLogout}>logout</button>
      </div>
    </div>
  </header>
)

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header)

/*
<NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink>
<NavLink to="/create" activeClassName="is-active">Create Expense</NavLink> 
<NavLink to="/help" activeClassName="is-active">Help</NavLink>
*/