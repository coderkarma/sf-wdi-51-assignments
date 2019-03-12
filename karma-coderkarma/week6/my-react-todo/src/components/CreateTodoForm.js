import React, { Component } from 'react';

class CreateTodoForm extends Component {
  state = {
    todo: ''
  };

  onInPutChange = event => {
    console.log(event.target);
    this.setState({
      todo: event.target.value
    });
  };

  onFormSubmit = event => {
      event.preventDefault();
      let todo = this.state.todo;
      this.props.createTodo(todo);
      this.setState({
          todo: ""
      })
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit} id="taskForm">
          <input
            type="text"
            id="newItemDescription"
            onChange={this.onInPutChange}
            value={this.state.todo}
            placeholder="What do you need to do?"
          />
          <button type="submit" id="addTask" className="btn">
            Add Todo
          </button>
        </form>
      </div>
    );
  }
}
export default CreateTodoForm;
