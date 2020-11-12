/* eslint-disable prettier/prettier */
/* eslint-disable operator-linebreak */
/* eslint-disable no-return-assign */
import React, { useEffect, useState } from 'react'
import { Redirect, useLocation, useParams } from 'react-router'
import { connect } from 'react-redux'
import Header from '../components/Header'
import Nav from '../components/Nav'
import About from '../components/About'
import Profilesvg from '../components/Profilesvg'
import Portfolio from '../components/Portfolio'
import Reel from '../components/Reel'
import Curriculum from '../components/Curriculum'
import useMenuObserver from '../components/hooks/useMenuObserver'

const Home = ({
  menu,
  modal,
  portfolioMenu,
  //staticContext = {},
}) => {

  const { portfolio } = useParams()

//este estado solo se activa despues de abrir el modal para que al entrar por
//la ruta no se detenga en menus anteriores entorpeciendo el modal
//ya que <Redirect> no esta cambiando la ruta y envie siempre la misma en el segudo paramentro
  const [portfolioParamAfterOpenModalbyUrl, setPortfolioParamAfterOpenModalbyUrl] = useState(false)
  const locationMenu = useLocation()
  const [menuScrollObserved, elementRef] = useMenuObserver({ portfolio, portfolioParamAfterOpenModalbyUrl })

  useEffect(() => {
    //cuando  el estado de menu cambie desde la url
    //o desde el Nav hara un scroll smoth
    if (modal === false && menu >= 0) {
      elementRef.current[menu].scrollIntoView({ behavior: 'smooth' })
    }
    if (modal === true) {
      setPortfolioParamAfterOpenModalbyUrl(true)
    }
  }, [menu, modal])

  return (
    <>
      {locationMenu.pathname !== `/portfolio/${portfolioMenu}0` &&
        menuScrollObserved === true &&
        modal === false && <Redirect to={`/portfolio/${portfolioMenu}0`} />}

      <header
        className="main-header"
        ref={(el) => {
          elementRef.current[0] = el
        }}
      >
        <Header />
      </header>
      <Profilesvg />
      <nav className="main-nav">
        <Nav locationMenu={locationMenu.pathname} />
      </nav>
      <section
        className="main-about"
        ref={(el) => {
          elementRef.current[1] = el
        }}
      >
        <About />
      </section>
      <section
        className="main-portfolio"
        ref={(el) => {
          elementRef.current[2] = el
        }}
      >
        <Portfolio portfolio={portfolio} />
      </section>
      <section
        className="main-reel"
        ref={(el) => {
          elementRef.current[3] = el
        }}
      >
      <Reel />
      </section>
      <section
        className="main-cv"
        ref={(el) => {
          elementRef.current[4] = el
        }}
      >
        <Curriculum />
      </section>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    menu: state.menu,
    modal: state.modal,
    portfolioMenu: state.portfolioMenu,
  }
}

export default connect(mapStateToProps, null)(Home)
