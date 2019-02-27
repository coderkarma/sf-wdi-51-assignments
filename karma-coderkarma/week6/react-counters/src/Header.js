import React, { Component } from "react";

class Header extends Component {
  
  render() {
    return (
      <header className="App-header">
        <h1 className="App-title">React Counters: {this.props.counter}</h1>
        <button onClick={this.props.incrementCounter} >+</button>
        <button onClick={this.props.decrementCounter}>-</button>
      </header>
    );
  }
}

export default Header;
