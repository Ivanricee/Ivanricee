/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import { withRouter, NavLink } from 'react-router-dom'
import { useParams } from 'react-router'
import '../assets/styles/components/Portfolio.scss'
import { connect } from 'react-redux'
import PortfolioList from '../components/PortfolioList'
import { setRouteMenu } from '../actions'

const Portfolio = (props) => {
  //para saber en que momento se establecio la ruto
  //y evitar el renderizado doble
  const [routeState, setRouteState] = useState(false)
  const { id: idPortfolioList, categoria } = useParams()

  useEffect(() => {
    if (categoria === 'frontend' || categoria === 'model') {
      props.setRouteMenu(categoria)
      setRouteState(true)
    } else props.history.push('/NotFound')
  }, [])

  const setRoute = (categoriaLink) => {
    props.setRouteMenu(categoriaLink)
    setRouteState(true)
  }

  return (
    <>
      {routeState && (
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
            <PortfolioList
              categoria={categoria}
              idPortfolioList={Number(idPortfolioList) || 0}
            />
          </article>
        </main>
      )}
    </>
  )
}

const mapDispatchToProps = {
  setRouteMenu,
}
export default withRouter(connect(null, mapDispatchToProps)(Portfolio))
