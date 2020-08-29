import React from 'react'
import { connect } from 'react-redux'
import PortfolioItem from './PortfoliolItem'

const PortfolioList = ({ idPortfolioList, categoria, portfolioList }) => {
  //console.log(`data de url id: ${id} categoria: ${categoria} `)

  const portfolioCateg = portfolioList.filter(
    (portfolioItem) => portfolioItem.category === (categoria === 'frontend' ? 1 : 2)
  )
  return (
    <>
      {portfolioCateg.map((portfolioItem) => (
        <PortfolioItem
          {...portfolioItem}
          categoria={categoria}
          key={portfolioItem.id}
          idPortfolioList={idPortfolioList}
        />
      ))}
    </>
  )
}
const mapStateToProps = (state) => {
  return {
    portfolioList: state.portfolioList,
  }
}
export default React.memo(connect(mapStateToProps, null)(PortfolioList))
