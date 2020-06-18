import React from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { setActiveMenu } from '../actions'
import '../assets/styles/App.scss'
import '../assets/styles/components/Nav.scss'

const Nav = (props) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="./" className={`${props.menu === 1 ? 'active' : 'link'}`}>
            Curriculum Vitae
          </Link>
        </li>
        <li>
          <Link
            to="./portfolio"
            className={`${props.menu === 2 ? 'active' : 'link'}`}
          >
            Portafolio
          </Link>
        </li>
        <li>
          <Link to="./reel" className={`${props.menu === 3 ? 'active' : 'link'}`}>
            Reel
          </Link>
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
