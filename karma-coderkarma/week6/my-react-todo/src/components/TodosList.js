import React, { Component } from 'react';
import Todo from './Todo';

class TodosList extends Component {
  render() {
    //mapping data from our request
    let todos = this.props.todos.map(todo => {
      return (
        <Todo
          //key unique identifier from JSON response (Mongo generated)
          key={todo._id}
          todo={todo}
        />
      );
    });

    return (
      <ul>
        {/* return all todos as unordered list object*/}
        {todos}
      </ul>
    );
  }
}

export default TodosList;
