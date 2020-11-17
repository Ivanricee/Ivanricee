/* eslint-disable no-unreachable */
/* eslint-disable operator-linebreak */
import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { IoLogoCss3, IoLogoHtml5 } from 'react-icons/io'
import { SiPhp, SiJquery, SiBootstrap, SiMysql, SiAngular } from 'react-icons/si'
import { FaReact } from 'react-icons/fa'

import ModalItem from './ModalItem'
import { setModalOpen } from '../../actions'
import Portal from '../utils/Portal'

const PortfolioItem = ({
  portfolioItem,
  id,
  title,
  cover,
  tools,
  portfolioCategory,
  modal,
  setModalOpen,
  portfolio,
}) => {
  const handleModalItem = () => {
    document.body.style.overflow = 'hidden'
    setModalOpen(true)
  }

  useEffect(() => {
    //cuando entre desde la ruta y coincida con un item se abre el modal

    if (portfolioItem !== 0 && portfolioItem === id) {
      document.body.style.overflow = 'hidden'
      setModalOpen(true)
    }
  }, [])

  const URL = `/portfolio/${portfolioCategory}${id}`
  return (
    <>
      <NavLink
        exact
        to={URL}
        className="main-portfolio__item"
        onClick={handleModalItem}
      >
        <div>
          <div className="main-portfolio__tools">
            {tools.map((tool) => {
              switch (tool) {
                case 'css':
                  return <IoLogoCss3 key={id + tool} />
                  break
                case 'html':
                  return <IoLogoHtml5 key={id + tool} />
                  break
                case 'php':
                  return <SiPhp key={id + tool} />
                  break
                case 'jquery':
                  return <SiJquery key={id + tool} />
                  break
                case 'bootstrap':
                  return <SiBootstrap key={id + tool} />
                  break
                case 'mysql':
                  return <SiMysql key={id + tool} />
                  break
                case 'angular':
                  return <SiAngular key={id + tool} />
                  break
                case 'react':
                  return <FaReact key={id + tool} />
                  break

                default:
                  return <div key={id + tool}>{tool}</div>
              }
            })}
          </div>
          <img alt={`${title}`} src={`${cover}`} />
          <div className="main-portfolio__item-text">
            <p>{`${title}`}</p>
          </div>
        </div>
      </NavLink>
      {modal && portfolioItem === id && (
        <Portal id="modal">
          <ModalItem
            portfolioItem={portfolioItem}
            title={title}
            key={id}
            categoria={portfolioCategory}
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
