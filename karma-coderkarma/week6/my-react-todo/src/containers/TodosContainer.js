import React, { Component } from 'react';
import TodoModel from '../models/Todo';
import TodosList from '../components/TodosList';
import CreateTodoForm from '../components/CreateTodoForm';

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
  //   provide a function to deletetodo for sucess
  // deleteTodo = todo => {
  //   TodoModel.delete(todo).then(res => {
  //     let todos = this.state.todos.filter(todo => todo._id !== res.data._id);
  //     this.setState({ todos });
  //   });
  // }

  deleteTodo = todo => {
    TodoModel.delete(todo).then(res => {
      let todos = this.state.todos.filter(function(todo) {
        return todo._id !== res.data._id;
      });
      this.setState({ todos });
    });
  };
  // Provide a function in the create new todos
  createTodo = todo => {
    let newTodo = {
      body: todo,
      completed: false
    };
    TodoModel.create(newTodo).then(res => {
      let todos = this.state.todos;
      let newTodos = todos.push(res.data);
      this.setState({
        newTodos
      });
    });
  };

  updateTodo = (todo, todoBody, todoId) => {
    function isUpdatedTodo(todo) {
      return todo._id === todoId;
    }

    TodoModel.update(todoId, todoBody).then(res => {
      let todos = this.state.todos;
      todos.find(isUpdatedTodo).body = todoBody.body;
      this.setState({ todos: todos });
    });
  };

  render() {
    return (
      <div>
        <TodosList todos={this.state.todos} deleteTodo={this.deleteTodo} />
        updateTodo={this.updateTodo}
        <CreateTodoForm createTodo={this.createTodo} />
      </div>
    );
  }
}
export default TodosContainer;
