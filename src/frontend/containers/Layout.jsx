import React from 'react'
import Nav from '../components/Nav'
import Aside from '../components/Aside'
import '../assets/styles/App.scss'

const Layout = ({ children }) => (
  <div className="container">
    <Nav />
    <Aside />
    {children}
  </div>
)

export default Layout
