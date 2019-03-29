import React, { Component } from "react";
import styled from "styled-components";
import TodoComplete from "../components/TodoComplete";
import dueDate from "../utils/dueDate";
import TodoSingle from "../components/TodoSingle";

const TodoListWrapper = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

class TodoList extends Component {
  state = {
    showCompletedTasks: false
  };

  showCompletedTasks = () => {
    console.log("hi");
    const switcher = !this.state.showCompletedTasks;
    this.setState({
      showCompletedTasks: switcher
    });
  };

  render() {
    const tasksRemaining = dueDate(this.props.todos, null);

    return (
      <TodoListWrapper>
        <label>
          {!this.state.showCompletedTasks ? (
            <>Show completed tasks</>
          ) : (
            <>Hide completed tasks</>
          )}
          <input type="checkbox" onClick={this.showCompletedTasks} />
        </label>

        {tasksRemaining === 0 && (
          <h3>Wow every thing done. You are a fucking legend</h3>
        )}

        {Object.keys(this.props.todos).map(todo => (
          <>
            <TodoSingle
              key={todo}
              index={todo}
              details={this.props.todos[todo]}
              completeTodo={this.props.completeTodo}
              deleteTodo={this.props.deleteTodo}
              todo={todo}
            />
          </>
        ))}

        {this.state.showCompletedTasks && (
          <>
            <h3>Completed tasks</h3>
            {Object.keys(this.props.todos).map(todo => (
              <>
                <TodoComplete
                  key={todo}
                  details={this.props.todos[todo]}
                  completeTodo={this.props.completeTodo}
                  todo={todo}
                />
              </>
            ))}
          </>
        )}
      </TodoListWrapper>
    );
  }
}

export default TodoList;
