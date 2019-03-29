import React, { Component } from "react"
import styled from "styled-components"
import ToDoForm from "./ToDoForm"
import Login from "./Login"
import TodoList from "./TodoList"
import { navigate } from "gatsby"
import firebase from "firebase"
import base, { firebaseApp } from "../base"

import Sidebar from "./Sidebar"

const Main = styled.div`
  display: flex;
  max-width: 1000px;
  margin: 0 auto;
  background: #f9f9f9;
`

const Content = styled.div`
  flex-grow: 3;
  flex-shrink: 1;
  padding: 2rem;
  background: #fff;
`

class Body extends Component {
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
    this.props.removeBinding()
    navigate(`/`)
  }

  render() {
    return (
      <Main>
        <Sidebar todos={this.props.todos} />

        <Content>
          <h3>All Tasks</h3>
          <ToDoForm addTodo={this.props.addTodo} todos={this.props.todos} />
          <TodoList
            todos={this.props.todos}
            completeTodo={this.props.completeTodo}
            deleteTodo={this.props.deleteTodo}
          />
        </Content>
      </Main>
    )
  }
}

export default Body
