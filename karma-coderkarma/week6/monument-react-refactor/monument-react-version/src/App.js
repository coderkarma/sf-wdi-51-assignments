import React, { Component } from 'react';
import NavBar from './NavBar/NavBar';
import { BrowserRouter, Router, Link} from 'react-router-dom'
// import Footer from './Footer/Footer';
import Index from './Index/Index';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        
        <Index />

         {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
