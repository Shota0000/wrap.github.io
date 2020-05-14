import React, { Component } from "react";
import Todo from "./Todo";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const todos = JSON.parse(localStorage.getItem("todoList")).map(todo => (
      <Todo key={todo.id} {...todo} />
    ));

    return <ul>{todos}</ul>;
  }
}

export default TodoList;
