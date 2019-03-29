import React, { Component } from "react"

import GlobalStyle from "../components/styles/GlobalStyles"
import Navigation from "../components/Navigation"
import App from "./App"
import base, { firebaseApp } from "../base"
import firebase from "firebase"
import Login from "./Login"
import { navigate } from "gatsby"
class AppWrapper extends Component {
  state = {
    uid: null,
    owner: null,
  }

  authHandler = async authData => {
    // if the user is new create an app

    // if (authData.additionalUserInfo.isNewUser) {
    //   await base.post(`${authData.user.uid}/owner`, {
    //     data: authData.user.uid
    //   });
    // }

    const app = await base.fetch(authData.user.uid, { context: this })

    if (!app.owner) {
      await base.post(`${authData.user.uid}/owner`, {
        data: authData.user.uid,
      })
    }
    this.setState({
      uid: authData.user.uid,
      owner: app.owner || authData.user.uid,
    })

    navigate(`/app/${authData.user.uid}`)
  }

  authenticate = provider => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]()
    firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .then(this.authHandler)
  }

  logout = async () => {
    await firebase.auth().signOut()
    this.setState({ uid: null })
    navigate(`/`)
  }
  componentDidMount() {
    // Check Authentication
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.authHandler({ user })
      }
    })
  }

  render() {
    // // check user is logged in
    // if (!this.state.uid) {
    //   return (
    //     <>
    //       <GlobalStyle />
    //       {/* <Navigation logout={this.logout} /> */}
    //       <Login authenticate={this.authenticate} />
    //     </>
    //   )
    // }
    // // Check logged in user is the owner

    // if (this.state.uid !== this.state.owner) {
    //   return <div>Sorry you are not the owner </div>;
    // }

    return (
      <App
        logout={this.logout}
        appId={this.state.uid}
        // history={this.props.history}
      />
    )
  }
}

export default AppWrapper
