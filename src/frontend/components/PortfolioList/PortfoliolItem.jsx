/* eslint-disable operator-linebreak */
import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import ModalItem from './ModalItem'
import { setModalOpen } from '../../actions'
import Portal from '../utils/Portal'

const PortfolioItem = ({
  idPortfolioList,
  id,
  title,
  cover,
  categoria,
  modal,
  setModalOpen,
}) => {
  const handleModalItem = () => {
    window.scroll({
      top: 0,
      left: 0,
    })
    return setModalOpen(true)
  }

  useEffect(() => {
    if (idPortfolioList !== 0 && idPortfolioList === id) {
      setModalOpen(true)
    }
  }, [])

  const URL = idPortfolioList === Number(0) ? `${categoria}/${id}` : `${id}`
  return (
    <>
      <NavLink
        exact
        to={URL}
        className="main-portfolio__item"
        onClick={handleModalItem}
      >
        <div>
          <div className="main-portfolio__item-text">
            <p>{`${title}`}</p>
          </div>
          <img alt={`${title}`} src={`${cover}`} />
        </div>
      </NavLink>
      {modal && idPortfolioList === id && (
        <Portal id="modal">
          <ModalItem
            idPortfolioList={idPortfolioList}
            title={title}
            key={id}
            categoria={categoria}
          />
        </Portal>
      )}
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    modal: state.modal,
  }
}
const mapDispatchToProps = {
  setModalOpen,
}

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioItem)
