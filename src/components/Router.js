import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import AppWrapper from "./AppWrapper"
import NotFound from "./NotFound"

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={AppWrapper} />
      <Route path="/app/appId" component={AppWrapper} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default Router
