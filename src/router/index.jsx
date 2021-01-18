import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import Landing from '../components/Landing/Landing'
import PamphletContainer from '../components/ContentPage/PamphletContainer'

export default (
  <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
    <Route exact path="/">
      <Landing />
    </Route>
    <Route exact path="/:page">
      <PamphletContainer />
    </Route>
  </BrowserRouter>
)
