import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './sideNav.css';

class SideNav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="nav flex-column nav-pills">
        <NavLink className="nav-link" exact to="/companyDash">Jobs</NavLink>
        <NavLink className="nav-link" to="/companyDash/generate">Generate Key</NavLink>
      </nav>
    )
  }
};

export default SideNav;
