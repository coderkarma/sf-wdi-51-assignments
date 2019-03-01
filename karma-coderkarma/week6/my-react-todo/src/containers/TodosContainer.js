import React, { Component } from 'react';
import TodoModel from '../models/Todo';
import TodosList from '../components/TodosList';

class TodosContainer extends Component {
  state = {
    todos: []
  };

//   when todosContainer mounts, fetch todo data
  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    TodoModel.all().then(res => {
      this.setState({
        todos: res.data.todos,
        todo: ''
      });
    });
  }

  render() {
    return (
      <div>
         <TodosList todos={this.state.todos}/>
      </div>
    );
  }
}
export default TodosContainer;
