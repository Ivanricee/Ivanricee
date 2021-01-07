/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PortfolioList from './PortfolioList'
import { setModalOpen, setPortfolioMenu } from '../../actions'

const Portfolio = (props) => {
  //10/20 => (1/2 = frontend/3D | 0 = sin item por abrir en modal)
  //const portfolioCategory =
  //par abrirlo directamente en el modal desde la ruta.
  const portfolioItem =
    props.portfolio == null ? 0 : Number(props.portfolio.slice(1))

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.keyCode === 27) {
        document.body.style.overflow = 'visible'
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
  const handlePushPortfolioCategory = (category) => {
    props.setPortfolioMenu(category)
  }
  return (
    <>
      <div className="main__title">
        <h1>PORTFOLIO</h1>
      </div>
      <nav className="main-portfolio__nav">
        <ul>
          <li>
            <Link
              to="/portfolio/10"
              onClick={() => handlePushPortfolioCategory(1)}
              className={`link ${props.portfolioMenu === 1 ? 'active' : ''} ${
                !props.portfolioMenu ? 'active' : ''
              }`}
            >
              Frontend
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link
              to="/portfolio/20"
              onClick={() => handlePushPortfolioCategory(2)}
              className={`link ${props.portfolioMenu === 2 ? 'active' : ''}`}
            >
              3D
            </Link>
          </li>
        </ul>
      </nav>
      <section className="main-portfolio__list">
        <PortfolioList
          portfolioCategory={props.portfolioMenu || 1}
          portfolioItem={portfolioItem}
        />
      </section>
    </>
  )
}

const mapStateToProps = (state) => {
  return { modal: state.modal, menu: state.menu, portfolioMenu: state.portfolioMenu }
}
const mapDispatchToProps = {
  setModalOpen,
  setPortfolioMenu,
}
export default connect(mapStateToProps, mapDispatchToProps)(Portfolio)
