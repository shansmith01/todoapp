import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/Layout"
import AppWrapper from "../components/AppWrapper"

const App = () => (
  <Layout>
    <Router>
      <AppWrapper path="/app/" />
      <AppWrapper path="/app/:appId" />
    </Router>
  </Layout>
)

export default App
