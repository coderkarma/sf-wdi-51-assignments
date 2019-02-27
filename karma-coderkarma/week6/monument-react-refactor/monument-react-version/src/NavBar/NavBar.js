import React from 'react';
import './NavBar.css';

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <a className="hamburger" href="">
            <i className="fa fa-bars" />
          </a>
          <ul>
            <li>
              <a href="index.html#about">About</a>
            </li>
            <li>
              <a href="index.html#gallery">Gallery</a>
            </li>
            <li>
              <a href="blog.html">Blog</a>
            </li>
            <li>
              <a href="index.html#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;