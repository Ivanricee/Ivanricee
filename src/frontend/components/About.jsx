import React from 'react'
import { FiGithub, FiInstagram } from 'react-icons/fi'
import { FaLinkedinIn, FaArtstation } from 'react-icons/fa'
import { GoLocation } from 'react-icons/go'

const About = () => {
  return (
    <>
      <div className="main__title">
        <h1>ABOUT</h1>
      </div>
      <div className="main-about__container">
        <div className="main__text">
          <p>
            I am a 3D Artist and fullstack developer specialized in frontend. I
            studied computer systems, design and 3D.
          </p>
          <p>
            I am passionate about creating interactive interfaces; create realistic
            3D stuffs as well as everything related to photography, lighting, and
            visual effects
          </p>
          <p>
            My passion for learning led me to study design and 3D while I was working
            as a fullstack developer. That helped me a lot to specialize as a
            frontend developer
          </p>
        </div>
        <div className="main-about__contact">
          <h2>Contact</h2>
          <div className="main-about__socialm">
            <a target="_blank" rel="noreferrer" href="https://github.com/ivanricee">
              <span>
                <FiGithub />
              </span>
              /ivanrices
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/ivanrice/"
            >
              <span>
                <FaLinkedinIn />
              </span>
              /ivanrice
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/ivanrice_/"
            >
              <span>
                <FiInstagram />
              </span>
              /ivanrice_
            </a>

            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.artstation.com/ivanrices"
            >
              <span>
                <FaArtstation />
              </span>
              /ivanrices
            </a>
            <p>
              <span>
                <GoLocation />
              </span>
              Mexico City
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
