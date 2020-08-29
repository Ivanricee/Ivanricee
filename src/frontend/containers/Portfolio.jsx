/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { useParams, Redirect } from 'react-router'
import '../assets/styles/components/Portfolio.scss'
import { connect } from 'react-redux'
import PortfolioList from '../components/PortfolioList'
import { setRouteMenu, setModalOpen } from '../actions'

const Portfolio = (props) => {
  const history = useHistory()
  //para saber en que momento se establecio la ruto
  //y evitar el renderizado doble
  const [routeState, setRouteState] = useState(false)
  const { id: idPortfolioList, categoria } = useParams()

  useEffect(() => {
    if (categoria === 'frontend' || categoria === 'model') {
      props.setRouteMenu(categoria)
      setRouteState(true)
    } else history.push('/NotFound')
  }, [])

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.keyCode === 27) {
        props.setModalOpen(false)
      }
    }
    if (props.modal) {
      document.addEventListener('keydown', onKeyDown)
    }

    return () => {
      if (props.modal) {
        document.removeEventListener('keydown', onKeyDown)
      }
    }
  }, [props.modal === true])

  const setRoute = (categoriaLink) => {
    props.setRouteMenu(categoriaLink)
    setRouteState(true)
  }
  if (props.modal === false && idPortfolioList) {
    return <Redirect to={`/portfolio/${categoria}`} />
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

const mapStateToProps = (state) => {
  return { modal: state.modal }
}
const mapDispatchToProps = {
  setRouteMenu,
  setModalOpen,
}
export default connect(mapStateToProps, mapDispatchToProps)(Portfolio)
