import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/custome.css';
import './App.css';

class Navigation extends Component {
     render() {
    return (
      <div >
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">

    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>    
    </ul>
 
</nav>
        </div>
    );
  }
}

export default Navigation;
