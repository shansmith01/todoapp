import React, { Component } from "react";
import styled from "styled-components";
import TaskCount from "./TaskCount";

import dueDate from "../utils/dueDate";

const SideBar = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  padding: 2rem;
`;

class Sidebar extends Component {
  render() {
    return (
      <SideBar>
        <h3>
          All Tasks <TaskCount>{dueDate(this.props.todos, null)}</TaskCount>
        </h3>
        <p>
          Today <TaskCount>{dueDate(this.props.todos, 0)}</TaskCount>
        </p>
        <p>
          Next 7 days <TaskCount>{dueDate(this.props.todos, 7)}</TaskCount>
        </p>
        <h3>Projects</h3>
        <h3>Labels</h3>
      </SideBar>
    );
  }
}

export default Sidebar;
