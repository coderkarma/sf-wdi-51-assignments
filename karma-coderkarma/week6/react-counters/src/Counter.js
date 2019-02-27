import React, { Component } from 'react';
class Counter extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);

    this.state = {
      counter: 0
    };
  }

//    Increment function 
  increment = () => {
    this.setState({
      counter: this.state.counter + 1
    });
    console.log(this.setState);
  };

   // Decrement function  
  decrement = () => {
    this.setState({
      counter: this.state.counter - 1
    });
  };

//   Reset function 
  reset = () => {
    this.setState({
      counter: 0
    });
  };

  render() {
    return (
      <div>
        <h1>Counter: {this.state.counter}</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}
export default Counter;
