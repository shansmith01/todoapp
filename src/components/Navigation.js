import React, { Component } from "react";
import styled from "styled-components";
import LogoutButton from "./LogoutButton";

const NavContainer = styled.div`
  padding: 1rem 2rem;
  background: lightblue;
  display: flex;
`;

const Logo = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
`;

const Nav = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
`;

const Search = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
`;

class Navigation extends Component {
  totalComplete = todos => {
    const total = Object.keys(todos).length;
    return total;
  };

  render() {
    return (
      <NavContainer>
        <Logo>Todo App</Logo>
        <Search>Search here</Search>
        <Nav>
          Nav here
          <LogoutButton logout={this.props.logout} />
          <p>Task completed {this.totalComplete(this.props.todos)} </p>
        </Nav>
      </NavContainer>
    );
  }
}

export default Navigation;
