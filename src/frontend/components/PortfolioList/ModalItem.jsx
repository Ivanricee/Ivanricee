import React from 'react'
import { connect } from 'react-redux'
import { AiOutlineCloseSquare } from 'react-icons/ai'
import { useHistory } from 'react-router-dom'
import { setModalOpen } from '../../actions'

const ModalItem = ({ idPortfolioList, title, imgItems, setModalOpen }) => {
  //const Items = imgItems.filter((item) => item.idPortfolioList === id)
  const history = useHistory()
  const portFolioItems = imgItems.filter(
    (item) => item.idPortfolioList === Number(idPortfolioList)
  )
  const handleModalItem = () => {
    history.goBack()
    return setModalOpen(false)
  }
  return (
    <>
      <h2 className="modal__icon" onClick={handleModalItem}>
        <AiOutlineCloseSquare />
      </h2>
      <h1 className="modal__title">{title.toUpperCase()}</h1>
      {portFolioItems.map((item) => {
        return <img src={item.src} alt={item.alt} key={item.id} />
      })}
      <button type="button" className="modal__btn--cerrar" onClick={handleModalItem}>
        CERRAR
      </button>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    imgItems: state.img_items,
  }
}
const mapDispatchToProps = { setModalOpen }
export default connect(mapStateToProps, mapDispatchToProps)(ModalItem)
