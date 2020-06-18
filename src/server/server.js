/* eslint-disable global-require */
//sirve toda la app
import express from 'express'
import dotenv from 'dotenv'
import webpack from 'webpack'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'
import { createStore } from 'redux'
import { renderRoutes } from 'react-router-config'
import { StaticRouter } from 'react-router-dom'
import serverRoutes from '../frontend/routes/serverRoutes'
import reducer from '../frontend/reducers/index'
import initialState from '../frontend/initialState'
import Layout from '../frontend/containers/Layout'
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
}

const setResponse = (html, preloadedState) => {
  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="assets/app.css" type="text/css">
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
        <script src="assets/app.js" type="text/javascript"></script>
      </body>
    </html>`
}
const renderApp = (req, res) => {
  const store = createStore(reducer, initialState)
  const preloadedState = store.getState()
  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={{}}>
        <Layout>{renderRoutes(serverRoutes)}</Layout>
      </StaticRouter>
    </Provider>
  )

  res.send(setResponse(html, preloadedState))
}
//Puede acceder desde todas las rutas posibles
app.get('*', renderApp)

app.listen(PORT, (err) => {
  if (err) console.log(err)
  else console.log('Server running on port 3000')
})
