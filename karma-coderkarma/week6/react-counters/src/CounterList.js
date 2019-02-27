import React, { Component } from 'react';
import Counter from './Counter';

class CounterList extends Component {
  render() {
    let counters = [];
    
    for (let i = 0; i < this.props.counter; i++) {
      counters.push(<Counter />);
    }

    return (
      <div className="counter-container">
        <h1>Number of Counters = {this.props.counter}</h1>
        {counters}
      </div>
    );
  }
}
export default CounterList;
