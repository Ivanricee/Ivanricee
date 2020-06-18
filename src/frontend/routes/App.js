import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Layout from '../containers/Layout'
import Curriculum from '../containers/Curriculum'
import Portfolio from '../containers/Portfolio'
import Reel from '../containers/Reel'
import NotFound from '../containers/NotFound'

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Curriculum} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/reel" component={Reel} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
)

export default App
