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
  description,
  cover,
  tools,
  animationInc,
  portfolioCategory,
  modal,
  setModalOpen,
  portfolio,
}) => {
  const handleModalItem = () => {
    document.body.style.overflow = 'hidden'
    setModalOpen(true)
  }

  const itemAnimationDelayStyle = animationInc * 0.1
  useEffect(() => {
    //cuando entre desde la ruta y coincida con un item se abre el modal

    if (portfolioItem !== 0 && portfolioItem === id) {
      document.body.style.overflow = 'hidden'
      setModalOpen(true)
    }
  }, [])

  const URL = `/portfolio/${portfolioCategory}${id}`
  return (
    <div
      className="main-portfolio__item"
      style={{ animationDelay: `${itemAnimationDelayStyle}s` }}
    >
      <NavLink exact to={URL} sty onClick={handleModalItem}>
        <div>
          <div className="main-portfolio__tools">
            {tools.map((tool) => {
              switch (tool) {
                case 'css':
                  return (
                    <span alt-tooltip="CSS 3" key={id + tool}>
                      <IoLogoCss3 key={id + tool} />
                    </span>
                  )
                  break
                case 'html':
                  return (
                    <span alt-tooltip="HTML 5" key={id + tool}>
                      <IoLogoHtml5 key={id + tool} />
                    </span>
                  )
                  break
                case 'php':
                  return (
                    <span alt-tooltip="PHP" key={id + tool}>
                      <SiPhp key={id + tool} />
                    </span>
                  )
                  break
                case 'jquery':
                  return (
                    <span alt-tooltip="JQuery" key={id + tool}>
                      <SiJquery key={id + tool} />
                    </span>
                  )
                  break
                case 'bootstrap':
                  return (
                    <span alt-tooltip="Bootstrap" key={id + tool}>
                      <SiBootstrap key={id + tool} />
                    </span>
                  )
                  break
                case 'mysql':
                  return (
                    <span alt-tooltip="MySQL" key={id + tool}>
                      <SiMysql key={id + tool} />
                    </span>
                  )
                  break
                case 'angular':
                  return (
                    <span alt-tooltip="Angular 2" key={id + tool}>
                      <SiAngular key={id + tool} />
                    </span>
                  )
                  break
                case 'react':
                  return (
                    <span alt-tooltip="React js + Redux" key={id + tool}>
                      <FaReact key={id + tool} />
                    </span>
                  )
                  break
                case 'arnold':
                  return (
                    <span alt-tooltip="Arnold render" key={id + tool}>
                      <img
                        src="https://res.cloudinary.com/ivanrice-c/image/upload/v1609285677/portfolio/icons/arnold_fywzrf.png"
                        alt="Arnold render"
                      />
                    </span>
                  )
                  break
                case 'maya':
                  return (
                    <span alt-tooltip="Autodesk maya" key={id + tool}>
                      <img
                        src="https://res.cloudinary.com/ivanrice-c/image/upload/v1609285677/portfolio/icons/maya_mvhgmh.png"
                        alt="Autodesk maya"
                      />
                    </span>
                  )
                  break
                case 'nuke':
                  return (
                    <span alt-tooltip="The foundry Nuke" key={id + tool}>
                      <img
                        src="https://res.cloudinary.com/ivanrice-c/image/upload/v1609285677/portfolio/icons/nuke_th3pum.png"
                        alt="The foundry nuke"
                      />
                    </span>
                  )
                  break
                case 'rizom':
                  return (
                    <span alt-tooltip="Rizom Uv" key={id + tool}>
                      <img
                        src="https://res.cloudinary.com/ivanrice-c/image/upload/v1609285677/portfolio/icons/rizomuv_uaxnda.png"
                        alt="Rizom Uv"
                      />
                    </span>
                  )
                  break
                case 'redshift':
                  return (
                    <span alt-tooltip="Redshift render" key={id + tool}>
                      <img
                        src="https://res.cloudinary.com/ivanrice-c/image/upload/v1609286796/portfolio/icons/redshift_bzbnze.png"
                        alt="Redshift render"
                      />
                    </span>
                  )
                  break

                case 'substance':
                  return (
                    <span alt-tooltip="Substance Designer" key={id + tool}>
                      <img
                        src="https://res.cloudinary.com/ivanrice-c/image/upload/v1609285677/portfolio/icons/substance_bpjo6v.png"
                        alt="Substance designer"
                      />
                    </span>
                  )
                  break
                case 'zbrush':
                  return (
                    <span alt-tooltip="Pixologic Zbrush" key={id + tool}>
                      <img
                        src="https://res.cloudinary.com/ivanrice-c/image/upload/v1609285677/portfolio/icons/substance_bpjo6v.png"
                        alt="zbrush"
                      />
                    </span>
                  )
                  break
                case 'mari':
                  return (
                    <span alt-tooltip="The foundry Mari" key={id + tool}>
                      <img
                        src="https://res.cloudinary.com/ivanrice-c/image/upload/v1609285677/portfolio/icons/mari_uq9jsd.png"
                        alt="The foundry mari"
                      />
                    </span>
                  )
                  break
                default:
                  return <div key={id + tool}>{tool}</div>
              }
            })}
          </div>
          <img alt={`${title}`} src={`${cover}`} />
          <div className="main-portfolio__item-text">
            <h2>{`${title}`}</h2>
            <p>{`${description}`}</p>
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
    </div>
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
