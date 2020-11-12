import React from 'react'
import { connect } from 'react-redux'
import { FaRegCalendarAlt } from 'react-icons/fa'
import Icon from './icon/Icon'

const Curriculum = (props) => {
  return (
    <>
      <h1 className="main__title">CURRICULUM</h1>
      <section className="main-cv__section-career">
        <div>
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
        </div>
      </section>
      <section className="main-cv__section-a">
        <h2>
          <Icon icon="exp" />
          WORK EXPERIENCE
        </h2>
        <h3 className="main-cv__subtitle">Fullstack Developer</h3>
        <a href="http://campus-virtuales.com/" target="_blank" rel="noreferrer">
          <h4>Campus Virtuales</h4>
        </a>
        <small>
          <FaRegCalendarAlt /> Oct 2013 - 2019
        </small>
        <ul>
          <li>
            <p>Frontend development of SCORM learning resources for moodle.</p>
          </li>
          <li>
            <p>
              Maintained the frontend functionality of sites like moodle, wordress
              and joomla.
            </p>
          </li>
          <li>
            <p>
              Websites development, my role for most of those were: Requirements
              analysis, data base management, frontend and backend development.
            </p>
          </li>
          <li>
            <p>Tools: </p>
            <ul>
              <li>Html 5.</li>
              <li>Css.</li>
              <li>Bootstrap.</li>
              <li>Mvc architecture in php</li>
              <li>MySQL.</li>
              <li> Rest Api.</li>
              <li>JavaScript.</li>
              <li>React Redux.</li>
              <li>Angular 2.</li>
            </ul>
          </li>
        </ul>
        <h3 className="main-cv__subtitle">Professional practice</h3>
        <a href="http://www.portomx.com.mx/" target="_blank" rel="noreferrer">
          <h4>PortoMx</h4>
        </a>
        <small>
          <FaRegCalendarAlt /> 2012 – Feb 2013.
        </small>
        <ul>
          <li>
            <p>Migration of a MySQL database with Stored procedures.</p>
          </li>
          <li>
            <p>Php training</p>
          </li>
        </ul>
      </section>
      <section className="main-cv__section-b">
        <h2>
          <Icon icon="portfolio" />
          EDUCATION
        </h2>
        <h3 className="main-cv__subtitle">Platzi</h3>
        <ul>
          <li>Git.</li>
          <li>JavaScript language.</li>
          <li>React, React Router, Redux thunk, React context and hooks.</li>
          <li>Backend in Node.js, Express and MongoDB.</li>
          <li>Passport authentication.</li>
          <li>Backend and Frontend integration.</li>
          <li>Unit tests with Jest.</li>
        </ul>
        <h3 className="main-cv__subtitle">Elephant VFX</h3>
        <ul>
          <li>Tracking.</li>
          <li>Texturing and Look-Development.</li>
          <li>Arnold render.</li>
          <li>Redshift render.</li>
          <li>Image-based lighting.</li>
        </ul>
        <h3 className="main-cv__subtitle">
          Licenciatura en Diseño, Animación y Arte Digital.
        </h3>
        <a href="https://www.unitec.mx/" target="_blank" rel="noreferrer">
          <h4>Universidad Tecnológica de México.</h4>
        </a>
        <small>
          <FaRegCalendarAlt /> 2014 - 2017
        </small>
        <h3 className="main-cv__subtitle">T.S.U. Sistemas Informáticos.</h3>
        <a href="http://www.utn.edu.mx/" target="_blank" rel="noreferrer">
          <h4>Universidad Tecnológica de Nezahualcóyotl.</h4>
        </a>
        <small>
          <FaRegCalendarAlt /> 2011 - 2012
        </small>
      </section>
      <section className="main-cv__section-c">
        <h2>
          <Icon icon="skill" />
          ADDITIONAL INFORMATION
        </h2>
        <p>
          <b>05/Apr/1992</b>
        </p>
        <p>
          <b>Spanish: </b>native
        </p>
        <p>
          <b>English: </b>intermediate
        </p>
        <h3 className="main-cv__subtitle">Web Development</h3>
        <div className="main-cv__section__wrapper-span">
          <span>JavaScript.</span>
          <span>React js, Redux and Context.</span>
          <span>Angular 2.</span>
          <span>Html 5.</span>
          <span>Css</span>
          <span>BEM</span>
          <span> Less</span>
          <span> Sass</span>
          <span> Grid</span>
          <span>Flexbox</span>
          <span>Bootstrap.</span>
          <span>UI/UX</span>
          <span>Node.js with Express.</span>
          <span>Php.</span>
          <span>Jest.</span>
          <span>Git.</span>
          <span>Visual Studio Code.</span>
          <span>SCRUM</span>
          <span>Research</span>
        </div>
        <h3 className="main-cv__subtitle">3D modeling and texturing</h3>
        <div className="main-cv__section__wrapper-span">
          <span>Autodesk Maya.</span>
          <span>Zbrush.</span>
          <span>Rizom Uv.</span>
          <span>The Foundry Mari.</span>
          <span>Substance Painter.</span>
          <span>Photoshop.</span>
          <span>Arnold 5 render.</span>
          <span>Redshift render.</span>
          <span>Unreal Engine (Look-Dev).</span>
        </div>
        <h3 className="main-cv__subtitle">Hobbies</h3>
        <div className="main-cv__section__icon">
          <div>
            <Icon icon="design" />
            <span>Painting.</span>
          </div>
          <div>
            <Icon icon="kindle" />
            <span>reading.</span>
          </div>
          <div>
            <Icon icon="piano" />
            <span>Music.</span>
          </div>
          <div>
            <Icon icon="videogame" />
            <span>videogames.</span>
          </div>
          <div>
            <Icon icon="box" />
            <span>Boxing.</span>
          </div>
        </div>
      </section>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    cover: state.cover,
  }
}

export default connect(mapStateToProps, null)(Curriculum)
