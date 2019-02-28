import React, { Component } from 'react';
import Header from './Header';
import CounterList from './CounterList';

class App extends Component {
  state = {
    counter: 0
  };

  increment = () => {
    // let counter = this.state.counter + 1;2
    this.setState({
      counter: this.state.counter + 1
    });
  };

  decrement = () => {
    // let counter = this.state.counter - 1;
    this.setState({ 
      counter: this.state.counter -1
     });
  };


  render() {
    return (
      <div className="App">
        <Header
          incrementCounter={this.increment}
          decrementCounter={this.decrement}
          counter={this.state.counter}
        />
        <CounterList counter={this.state.counter} />
      </div>
    );
  }
}
export default App;
