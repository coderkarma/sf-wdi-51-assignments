import React, { Component } from 'react';
import TodoForm from './updateTodoForm';

class Todo extends Component {
  deleteClickedTodo = e => {
    e.preventDefault();
    this.props.deleteTodo(this.props.todo);
  };
  render() {
    return (
      <li data-todos-index={this.props.todo._id}>
        <div>
          <span>{this.props.todo.body}</span>
          <a
            href="#removething"
            className="remove"
            onClick={this.deleteClickedTodo}
          >
            Remove
          </a>
        </div>

        <TodoForm
          todo={this.props.todo}
          buttonName="Update Todo!"
          updateTodo={this.props.updateTodo}
        />
        <button type="submit"></button>
      </li>
    );
  }
}
export default Todo;
