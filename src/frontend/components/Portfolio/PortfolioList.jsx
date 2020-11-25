/* eslint-disable prettier/prettier */
import React from 'react'
import { connect } from 'react-redux'
import PortfolioItem from './PortfoliolItem'

const PortfolioList = ({
  portfolioItem,
  portfolioCategory,
  portfolioList,
}) => {
  const portfolioListOfItems = portfolioList.filter(
    (portfolioListItem) => portfolioListItem.category === portfolioCategory
  )
  return (
    <>
      {portfolioListOfItems.length > 0 ?
        portfolioListOfItems.map((portfolioListItem, index) => (
          <PortfolioItem
            {...portfolioListItem}
            portfolioCategory={portfolioCategory}
            key={portfolioListItem.id}
            animationInc={index}
            portfolioItem={portfolioItem}
          />
        )) :
       <div className="main-portfolio__nodata"><h2>Selecciona frontend o 3D para ver el portafolio.</h2></div>}
    </>
  )
}
const mapStateToProps = (state) => {
  return {
    portfolioList: state.portfolioList,
  }
}
export default React.memo(connect(mapStateToProps, null)(PortfolioList))
