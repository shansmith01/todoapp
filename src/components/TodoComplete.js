import React, { Component } from "react";
import styled from "styled-components";
import { format } from "date-fns";

const Item = styled.li`
  padding: 1rem 0;
  border-bottom: 1px solid #e2e2e2;
  display: flex;
  justify-content: space-between;
  color: #9c9c9c;
`;
const ItemTask = styled.span`
  flex-grow: 1;
  flex-shrink: 1;
`;

const DueDate = styled.span`
  margin: 0 1rem;
`;

class TodoSingle extends Component {
  render() {
    const taskCompleted = this.props.details.complete;

    // Formate date from state and change from milliseconds. Add in something to determin days and date
    const date = format(new Date(this.props.details.dueDate), "MMM DD");

    return (
      taskCompleted && (
        <Item>
          <ItemTask>{this.props.details.name}</ItemTask>
          {this.props.details.dueDate && <DueDate>{date}</DueDate>}
        </Item>
      )
    );
  }
}

export default TodoSingle;
