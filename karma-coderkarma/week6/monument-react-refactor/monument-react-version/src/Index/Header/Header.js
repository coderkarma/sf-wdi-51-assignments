import React from 'react';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <header className="vertical-center">
        <div>
          <h1>
            <a href="index.html">Monument</a>
          </h1>
          <h2>A Lifestyle Magazine</h2>
        </div>
      </header>
    );
  }
}

export default Header;
