import React, { Component } from 'react';
import SearchContainer from './components/SearchContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Search Your Favorite Gify</h1>
        <SearchContainer />
      </div>
    );
  }
}

export default App;
