import React from 'react'

const PortfolioItem = ({ id, title, cover, category }) => {
  return (
    <div className="main-portfolio__item">
      <div className="main-portfolio__item-text">
        <p>{`${title}`}</p>
      </div>
      <img alt={`${title}`} src={`${cover}`} />
    </div>
  )
}

export default PortfolioItem
