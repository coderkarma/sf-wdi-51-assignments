import React, { Component } from 'react';

class TodoForm extends Component {
  state = {
    _id: this.props.todo._id,
    todo: this.props.todo.body
  };

  onChange = event => {
    this.setState({
      todo: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    let todo = this.state.todo;
    this.props.updateTodo(todo);
    this.setState({
      todo: ''
    });
  };

  render() {
    return (
      <div>
        <div className="updateTodoForm">
          <form onSubmit={this.onSubmit}>
            <input
              type="text"
              onChange={this.onChange}
              placeholder="Update this todo here"
              value={(this.state && this.state.todo) || ''}
            />
          </form>
        </div>
      </div>
    );
  }
}
export default TodoForm;
