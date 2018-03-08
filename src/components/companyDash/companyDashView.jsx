import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './companyDash.css';

import Routes from './routes.jsx';
import SideNav from '../sideNav/sideNav.jsx';

class CompanyDashView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="company-dashboard">
        <div className="container company-container">
          <div className="row company-dashboard-row">
            <div className="col col-lg-auto side-nav">
              <SideNav />
            </div>
            <div className="col col-lg-auto company-dashboard-routes">
              <Routes />
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default withRouter(CompanyDashView);
