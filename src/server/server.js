/* eslint-disable global-require */
//sirve toda la app
import express from 'express'
import dotenv from 'dotenv'
import webpack from 'webpack'
import React from 'react'
import helmet from 'helmet'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'
import { createStore } from 'redux'
import { renderRoutes } from 'react-router-config'
import { StaticRouter } from 'react-router-dom'
import serverRoutes from '../frontend/routes/serverRoutes'
import reducer from '../frontend/reducers/index'
//import initialState from '../frontend/initialState'
import Layout from '../frontend/containers/Layout'
import getManifest from './getManifest'

//Require a projects DB image for initialState
const { projectsDb } = require('./utils/db/projectsDb')
//const bodyParser = require('body-parser')
//busca el entorno y toma las variables
dotenv.config()
const { ENV, PORT } = process.env
const app = express()

//validamos el environment en el que nos encontramos
if (ENV === 'development') {
  console.log('Development config')
  //configuramos webpack con sus dependencias
  const webpackConfig = require('../../webpack.config')
  const webpackDevMiddleWare = require('webpack-dev-middleware')
  const webpackHotMiddleWare = require('webpack-hot-middleware')
  //ayuda a cmpilar la configuracion de webpack
  const compiler = webpack(webpackConfig)
  const serverConfig = { port: PORT, hot: true }

  //definir y usar webpack del middleware
  app.use(webpackDevMiddleWare(compiler, serverConfig))
  //ayuda a (HMR) exchanges, adds, or removes modules while an application is running, without a full reload.
  app.use(webpackHotMiddleWare(compiler))
} else {
  app.use((req, res, next) => {
    if (!req.hashManifest) req.hashManifest = getManifest()
    next()
  })
  //production carpeta publica
  app.use(express.static(`${__dirname}/public`))
  app.use(helmet())
  app.use(helmet.permittedCrossDomainPolicies())
  //deshabilitamos la cabecera x-powered-by
  app.disable('x-powered-by')
}

const setResponse = (html, preloadedState, manifest) => {
  const mainStyles = manifest ? manifest['main.css'] : 'assets/app.css'
  const vendorStyles = manifest ? manifest['vendors.css'] : 'assets/vendors.app.css'
  const mainBuild = manifest ? manifest['main.js'] : 'assets/app.js'
  const vendorBuild = manifest ? manifest['vendors.js'] : 'assets/vendor.js'

  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=Khand:wght@400;600;700&display=swap" rel="stylesheet"> 
        <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300;400;500;600;700&display=swap" rel="stylesheet">         
        <link  rel="stylesheet" type="text/css" href="${mainStyles}">
        <link  rel="stylesheet" type="text/css" href="${vendorStyles}">
        <title>Ivanrice</title>
      </head>
      <body>
        <div id="app">${html}</div>
        <script>
        window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
          /</g,
          '\\u003c'
        )}
        </script>
        <script src="${mainBuild}" type="text/javascript"></script>
        <script src="${vendorBuild}" type="text/javascript"></script>
      </body>
    </html>`
}
const renderApp = async (req, res) => {
  let initialState
  try {
    const projects = await Promise.resolve(projectsDb)
    //res.status(200).json(projects)
    initialState = {
      menu: 'frontend',
      cover:
        'https://res.cloudinary.com/ivanrice-c/image/upload/q_auto:good/v1596741394/introduce.png',
      portfolioList: projects.portfolioList,
      img_items: projects.img_items,
    }
  } catch (err) {
    initialState = {
      menu: 'frontend',
      cover:
        'https://res.cloudinary.com/ivanrice-c/image/upload/q_auto:good/v1596741394/introduce.png',
      portfolioList: [],
      img_items: [],
    }
    console.log(err)
  }
  const store = createStore(reducer, initialState)
  const preloadedState = store.getState()
  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={{}}>
        <Layout>{renderRoutes(serverRoutes)}</Layout>
      </StaticRouter>
    </Provider>
  )

  res.send(setResponse(html, preloadedState, req.hashManifest))
}
//Ruta para servir el json de los proyectos
//app.get('/projects', async function (req, res) {})
//Puede acceder desde todas las rutas posibles
app.get('*', renderApp)

app.listen(PORT, (err) => {
  if (err) console.log(err)
  else console.log(`server running on port ${PORT}`)
})
