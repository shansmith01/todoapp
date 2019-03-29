import React, { Component } from "react"
import { navigate } from "gatsby"
import base from "../base"

import GlobalStyle from "../components/Styles/GlobalStyles"
import Navigation from "../components/Navigation"
import Body from "../components/Body"

class App extends Component {
  state = {
    todos: {},
    projects: {},
    // priority: {[1,2,3]}
  }

  componentDidMount() {
    console.log(this.props.appId)
    this.ref = base.syncState(`${this.props.appId}/todos`, {
      context: this,
      state: "todos",
    })
  }

  componentWillUnmount() {
    base.removeBinding(this.ref)
  }

  removeBinding = () => {
    base.removeBinding(this.ref)
  }

  addTodo = todo => {
    // copy state
    const todos = { ...this.state.todos }
    todos[`todo${Date.now()}`] = todo
    // add todo to state
    this.setState({
      todos,
    })
  }

  updateToDo = (key, updateToDo) => {
    // Copy state
    const todos = { ...this.state.todos }
    // Update state
    todos[key] = updateToDo
    //Set State
    this.setState({
      todos,
    })
  }

  deleteTodo = key => {
    // Copy state
    const todos = { ...this.state.todos }
    // Update state
    todos[key] = null
    //Set State
    this.setState({
      todos,
    })
  }

  completeTodo = todo => {
    const todos = { ...this.state.todos }
    todos[todo] = { complete: true }
    this.setState({ todos })
  }

  render() {
    return (
      <>
        <GlobalStyle />
        <Navigation logout={this.props.logout} todos={this.state.todos} />

        <Body
          completeTodo={this.completeTodo}
          addTodo={this.addTodo}
          deleteTodo={this.deleteTodo}
          todos={this.state.todos}
          appId={this.props.appId}
          // history={this.props.history}
        />
      </>
    )
  }
}

export default App
