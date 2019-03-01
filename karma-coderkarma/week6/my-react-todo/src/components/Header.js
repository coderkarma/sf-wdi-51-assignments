import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Todo</h1>
          <nav>
            <Link to={'/'}>Home</Link>
            <Link to={'/todos'}>Todos</Link>
          </nav>
        </header>
      </div>
    );
  }
}
export default Header;
