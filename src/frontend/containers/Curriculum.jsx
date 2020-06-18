import React, { useEffect } from 'react'
import '../assets/styles/components/Main-cv.scss'
import { connect } from 'react-redux'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { setActiveMenu } from '../actions'

import Icon from '../components/icon/Icon'

const Curriculum = (props) => {
  useEffect(() => {
    props.setActiveMenu(1)
  }, [])
  return (
    <main className="main--cv">
      <h1 className="title">Curriculum Vitae</h1>

      <article className="article--a">
        <h2>
          <Icon icon="exp" />
          WORK EXPERIENCE
        </h2>

        <h3>Fullstack Developer</h3>
        <a href="http://campus-virtuales.com/" target="_blank">
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

        <h3>Professional practice</h3>
        <a href="http://www.portomx.com.mx/" target="_blank">
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
      </article>
      <article className="article--b">
        <h2>
          <Icon icon="portfolio" />
          EDUCATION
        </h2>
        <h3>Platzi</h3>
        <ul>
          <li>
            <p>Git.</p>
          </li>
          <li>
            <p>JavaScript language.</p>
          </li>
          <li>
            <p>React, React Router, Redux thunk, React context and hooks.</p>
          </li>
          <li>
            <p>Backend in Node.js, Express and MongoDB.</p>
          </li>
          <li>
            <p>Passport authentication.</p>
          </li>
          <li>
            <p>Backend and Frontend integration.</p>
          </li>
          <li>
            <p>Unit tests with Jest.</p>
          </li>
        </ul>

        <h3>Elephant VFX</h3>
        <ul>
          <li>Tracking.</li>
          <li>Texturing and Look-Development.</li>
          <li>Arnold render.</li>
          <li>Redshift render.</li>
          <li>Image-based lighting.</li>
        </ul>

        <h3>Licenciatura en Diseño, Animación y Arte Digital.</h3>
        <a href="https://www.unitec.mx/" target="_blank">
          <h4>Universidad Tecnológica de México.</h4>
        </a>
        <small>
          <FaRegCalendarAlt /> 2014 - 2017
        </small>

        <h3>T.S.U. Sistemas Informáticos.</h3>
        <a href="http://www.utn.edu.mx/" target="_blank">
          <h4>Universidad Tecnológica de Nezahualcóyotl.</h4>
        </a>
        <small>
          <FaRegCalendarAlt /> 2011 - 2012
        </small>
      </article>
      <article className="article--c">
        <h2>
          <Icon icon="skill" />
          ADDITIONAL INFORMATION
        </h2>
        <p>05/Apr/1992</p>
        <p>Spanish: native </p>
        <p>English: intermediate </p>

        <h3>Web Development</h3>
        <div className="article__wrapper-span">
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

        <h3>3D modeling and texturing</h3>
        <div className="article__wrapper-span">
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

        <h3>Hobbies</h3>
        <div className="article__icon">
          <Icon icon="design" />
          <Icon icon="kindle" />
          <Icon icon="piano" />
          <Icon icon="videogame" />
          <Icon icon="box" />
        </div>
      </article>
    </main>
  )
}

const mapDispatchToProps = {
  setActiveMenu,
}

export default connect(null, mapDispatchToProps)(Curriculum)
