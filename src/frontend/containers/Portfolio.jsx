import React, { useEffect } from 'react'
import '../assets/styles/components/Portfolio.scss'
import { connect } from 'react-redux'
import CarouselList from '../components/PortfolioList'
import { setActiveMenu } from '../actions'

const Portfolio = (props) => {
  useEffect(() => {
    props.setActiveMenu(2)
  }, [])
  return (
    <main className="main-portfolio">
      <article className="main-portfolio__title" />
      <article className="main-portfolio__list">
        <CarouselList />
      </article>
    </main>
  )
}

const mapDispatchToProps = {
  setActiveMenu,
}
export default connect(null, mapDispatchToProps)(Portfolio)
