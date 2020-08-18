import React from 'react'
import { connect } from 'react-redux'
import PortfolioItem from './PortfoliolItem'

const PortfolioList = ({ id, categoria, portfolioList }) => {
  console.log(`data de url id: ${id} categoria: ${categoria} `)

  const portfolioCateg = portfolioList.filter(
    (portfolioItem) => portfolioItem.category === (categoria === 'frontend' ? 1 : 2)
  )
  console.log('portafolio filtrado', portfolioCateg)
  return (
    <>
      {portfolioCateg.map((imgItem) => (
        <PortfolioItem {...imgItem} key={imgItem.id} />
      ))}
    </>
  )
}
const mapStateToProps = (state) => {
  return {
    portfolioList: state.portfolioList,
  }
}
export default connect(mapStateToProps, null)(PortfolioList)
