import React, { useEffect } from 'react'
import '../assets/styles/components/Main-portfolio.scss'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import CarouselList from '../components/CarouselList'
import { setActiveMenu } from '../actions'

const Portfolio = (props) => {
  useEffect(() => {
    props.setActiveMenu(2)
  }, [])
  return (
    <main className="main--portfolio">
      <article className="main--portfolio__title">
        <h1>Portfolio</h1>
      </article>
      <article className="main--portfolio__carousel">
        <CSSTransition
          transitionName="fade"
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}
        >
          <div className="main--portfolio__carousel-cont">
            <CarouselList />
          </div>
        </CSSTransition>
      </article>
      <article className="main--portfolio__breakdown">
        <div className="main--portfolio__breakdown-carou" />
      </article>
    </main>
  )
}

const mapDispatchToProps = {
  setActiveMenu,
}
export default connect(null, mapDispatchToProps)(Portfolio)
