/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react'
import { withRouter, NavLink } from 'react-router-dom'
import { useParams } from 'react-router'
import '../assets/styles/components/Portfolio.scss'
import { connect } from 'react-redux'

import PortfolioList from '../components/PortfolioList'
import { setRouteMenu } from '../actions'

const Portfolio = (props) => {
  const { id, categoria } = useParams()

  useEffect(() => {
    if (categoria === 'frontend' || categoria === 'model') {
      props.setRouteMenu(categoria)
    } else props.history.push('/NotFound')
  }, [])

  const setRoute = (categoriaLink) => {
    props.setRouteMenu(categoriaLink)
  }
  return (
    <main className="main-portfolio">
      <article className="main-portfolio__nav">
        <ul>
          <li>
            <NavLink
              to="/portfolio/frontend"
              className="link"
              activeClassName="active"
              onClick={() => setRoute('frontend')}
            >
              Frontend
            </NavLink>
          </li>
          <li>/</li>
          <li>
            <NavLink
              to="/portfolio/model"
              className="link"
              activeClassName="active"
              onClick={() => setRoute('model')}
            >
              3D
            </NavLink>
          </li>
        </ul>
      </article>
      <article className="main-portfolio__list">
        <PortfolioList categoria={categoria} id={id || 0} />
      </article>
      {id ? <article /> : null}
    </main>
  )
}

const mapDispatchToProps = {
  setRouteMenu,
}
export default withRouter(connect(null, mapDispatchToProps)(Portfolio))
