import React from 'react'
import { Route } from 'react-router-dom'

export const makeRoute = (path: string, Component: React.FC) => (
  <Route path={`/JSFTK_combat${path}`}>
    <Component />
  </Route>
)
