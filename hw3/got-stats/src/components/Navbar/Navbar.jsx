import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <header>
        <nav className={'navbar'}>
          <Link to='/home'>Home</Link>
          <Link to='/search'>Search</Link>
          <Link to='/houses'>House Chart</Link>
        </nav>
      </header>
    );
  }
}

export default Navbar;
