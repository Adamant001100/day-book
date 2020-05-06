import React, { Component } from "react";
import { Link } from "react-router-dom";

import './Navbar.css';


class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper">
            <Link to="/" className="col s5 brand-logo left blue-text">
              <i className="material-icons"></i>
              QazCarbon444
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}


export default Navbar;