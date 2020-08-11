/* eslint-disable operator-linebreak */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import '../assets/styles/components/Aside.scss'
import { FiMail, FiSmartphone, FiGithub } from 'react-icons/fi'
import { FaLinkedinIn, FaArtstation } from 'react-icons/fa'
import { GoLocation } from 'react-icons/go'

const Aside = () => {
  const [visibility, setVisibility] = useState('')

  const handleBtnVisibility = (element) => {
    setVisibility(element)
  }
  const handleBtnClose = () => {
    setVisibility('')
  }
  return (
    <aside className="main-aside">
      <div className="main-aside__background">
        <picture>
          <source
            media="(max-width: 768px)"
            srcSet="https://res.cloudinary.com/ivanrice-c/image/upload/v1596741393/introduce_mobil_o8gs6s.png"
          />
          <source
            media="(min-width: 769px)"
            srcSet="https://res.cloudinary.com/ivanrice-c/image/upload/v1596741394/introduce.png"
          />
          <img
            src="https://res.cloudinary.com/ivanrice-c/image/upload/v1596741393/introduce_mobil_o8gs6s.png"
            alt="introduce background"
          />
        </picture>
      </div>
      <figure className="main-aside__profile">
        <img
          src="https://res.cloudinary.com/ivanrice-c/image/upload/v1596746856/Fotoperfil_qd5hqc.png"
          alt="profile badge"
        />
        <button
          type="button"
          className="main-aside__btn career"
          onClick={() => handleBtnVisibility('career')}
        >
          CAREER OBJECTIVE
        </button>
      </figure>
      <div className="main-aside__title">
        <h1>FRONTEND DEVELOPER</h1>
        <h3 className="main-aside__name">IVAN BAUTISTA GUERRERO</h3>
        <button
          type="button"
          className="main-aside__btn"
          onClick={() => handleBtnVisibility('contact')}
        >
          CONTACT
        </button>
      </div>

      <div
        className={
          visibility === 'contact'
            ? 'main-aside__contact visibility'
            : 'main-aside__contact'
        }
      >
        <h2>CONTACT</h2>
        <p>
          <FiMail />
          ivanbautistag@gmail.com
        </p>
        <p>
          <FiSmartphone />
          (+52) 55 6129 1646
        </p>
        <a target="_blank" rel="noreferrer" href="https://github.com/ivanrices">
          <FiGithub />
          /ivanrices
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/ivanrice/"
        >
          <FaLinkedinIn />
          /ivanrice
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.artstation.com/ivanrices"
        >
          <FaArtstation />
          /ivanrices
        </a>
        <p>
          <GoLocation />
          Mexico City
        </p>
        <button
          type="button"
          className="main-aside__btn--cerrar contact-close"
          onClick={handleBtnClose}
        >
          Cerrar
        </button>
      </div>
      <div
        className={
          visibility === 'career'
            ? 'main-aside__objetive visibility'
            : 'main-aside__objetive'
        }
      >
        <h2>CAREER OBJETIVE</h2>
        <p>
          I am a frontend developer in JavaScript, with 5 years of experience as
          fullstack developer. I have more experience in educational sector.
        </p>
        <p>
          I am characterized by my teamwork and collaboration, successful
          communication, adaptability and flexibility to change.
        </p>
        <p> I´m looking for a frontend developer position</p>
        <button
          type="button"
          className="main-aside__btn--cerrar career-close"
          onClick={handleBtnClose}
        >
          Cerrar
        </button>
      </div>
    </aside>
  )
}

export default Aside
