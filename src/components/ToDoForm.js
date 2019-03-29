import React, { Component } from "react";
import styled from "styled-components";
import Firebase from "firebase";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TodoForm = styled.form`
  padding: 1rem 0;
  border-bottom: 1px solid #e2e2e2;
`;

class ToDoForm extends Component {
  state = {
    tempDate: Date.now()
  };

  handleChange = date => {
    const newDate = Date.parse(date);
    this.setState({
      tempDate: newDate
    });
  };

  createTodo = event => {
    event.preventDefault();

    const newtodo = {
      name: event.target.name.value,
      complete: false,
      createdDate: Firebase.database.ServerValue.TIMESTAMP, // Date Created
      dueDate: this.state.tempDate, // Date due
      label: "", // string
      taskLength: "", // minutes
      priority: "" // Integer
    };
    this.props.addTodo(newtodo);
    event.currentTarget.reset();
    this.forceUpdate();
    this.setState({
      tempDate: Date.now()
    });
  };

  render() {
    return (
      <TodoForm onSubmit={this.createTodo}>
        <label>Add a todo</label>
        <input type="text" name="name" placeholder="todo" required />
        <input
          type="text"
          name="taskLength"
          placeholder="Length of time needed"
        />
        <DatePicker
          selected={this.state.tempDate}
          onChange={this.handleChange}
          dateFormat="MMMM d"
        />
        <input type="submit" value="Submit" />
      </TodoForm>
    );
  }
}

export default ToDoForm;
