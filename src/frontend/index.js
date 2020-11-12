import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
//import { Router } from 'react-router'
//import { createBrowserHistory } from 'history'

import App from './routes/App'
import reducer from './reducers/index'

//definimos el browserhistory
//const history = createBrowserHistory()
const preloadedState = window.__PRELOADED_STATE__
const store = createStore(reducer, preloadedState)
delete window.__PRELOADED_STATE__
ReactDOM.hydrate(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('main')
)
