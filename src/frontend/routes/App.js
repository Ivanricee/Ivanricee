import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Layout from '../containers/Layout'
import Home from '../containers/Home'
import NotFound from '../containers/NotFound'

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        {/*<Route exact path="/:menuOption?/:portfolio?" component={Home} />*/}
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={Home} />
        <Route exact path="/portfolio/:portfolio?" component={Home} />
        <Route exact path="/reel" component={Home} />
        <Route exact path="/cv" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
)

export default App
