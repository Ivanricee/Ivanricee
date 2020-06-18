import React from 'react'
import '../assets/styles/components/Aside.scss'
import { FiMail, FiSmartphone, FiGithub, FiLinkedin } from 'react-icons/fi'
import { FaLinkedinIn, FaArtstation } from 'react-icons/fa'
import { GoLocation } from 'react-icons/go'

const Aside = () => (
  <aside className="left">
    <h1>FRONTEND DEVELOPER</h1>
    <h2 className="left__name">IVAN BAUTISTA GUERRERO</h2>
    <h2>CONTACT</h2>

    <p>
      <FiMail />
      ivanbautistag@gmail.com
    </p>

    <p>
      <FiSmartphone />
      (+52) 55 6129 1646
    </p>
    <a target="_blank" href="https://github.com/ivanrices">
      <FiGithub />
      /ivanrices
    </a>
    <a target="_blank" href="https://www.linkedin.com/in/ivanrice/">
      <FaLinkedinIn />
      /ivanrice
    </a>
    <a target="_blank" href="https://www.artstation.com/ivanrices">
      <FaArtstation />
      /ivanrices
    </a>
    <p>
      <GoLocation />
      Mexico City
    </p>

    <h2>CAREER OBJETIVE</h2>
    <p>
      I am a frontend developer in JavaScript, with 5 years of experience as
      fullstack developer. I have more experience in educational sector.
    </p>
    <p>
      I am characterized by my teamwork and collaboration, successful communication,
      adaptability and flexibility to change.
    </p>
    <p> I´m looking for a frontend developer position</p>
    <p />
  </aside>
)

export default Aside
