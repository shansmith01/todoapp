import React, { Component } from "react";
import styled from "styled-components";
import { format } from "date-fns";

const Item = styled.li`
  padding: 1rem 0;
  border-bottom: 1px solid #e2e2e2;
  display: flex;
  justify-content: space-between;
`;
const ItemTask = styled.span`
  flex-grow: 1;
  flex-shrink: 1;
`;

const DueDate = styled.span`
  margin: 0 1rem;
`;

const Checkbox = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    border-radius: 50%;
    border: 1px solid #c7c7c7;
  }
  :hover input ~ .checkmark {
    background-color: #ccc;
  }
  input:checked ~ .checkmark {
    background-color: #2196f3;
  }
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }
  input:checked ~ .checkmark:after {
    display: block;
  }
  .checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

class TodoSingle extends Component {
  render() {
    const taskCompleted = this.props.details.complete;

    // Formate date from state and change from milliseconds. Add in something to determin days and date
    const date = format(new Date(this.props.details.dueDate), "MMM DD");

    return taskCompleted ? (
      ""
    ) : (
      <Item>
        <Checkbox>
          <input
            type="checkbox"
            onClick={() => {
              this.props.completeTodo(this.props.todo);
            }}
          />
          <span className="checkmark" />
        </Checkbox>
        <ItemTask>{this.props.details.name}</ItemTask>
        {this.props.details.dueDate && <DueDate>{date}</DueDate>}
        <button onClick={() => this.props.deleteTodo(this.props.index)}>
          &times;
        </button>
      </Item>
    );
  }
}

export default TodoSingle;
