import React from 'react'
import { NavLink } from 'react-router-dom'

import { connect } from 'react-redux'
import '../assets/styles/App.scss'
import '../assets/styles/components/Nav.scss'

const Nav = (props) => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/" className="link" activeClassName="active">
            Curriculum Vitae
          </NavLink>
        </li>
        <li>
          <NavLink
            strict
            to={`/portfolio/${props.menu}`}
            className="link"
            activeClassName="active"
          >
            Portafolio
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/reel" className="link" activeClassName="active">
            Reel
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
const mapStateToProps = (state) => {
  return {
    menu: state.menu,
  }
}
export default connect(mapStateToProps, null)(Nav)
