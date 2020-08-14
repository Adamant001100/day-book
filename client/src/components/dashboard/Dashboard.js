import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import AddEmployee from "../crud/AddEmployee";
import EditEmployee from "../crud/EditEmployee";
import ListEmployee from "../crud/ListEmployee";

//---------------------------REDUX------------------------------//
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
//---------------------------REDUX------------------------------//

import "./Dashboard.css";

class Dashboard extends Component {
  onLogoutclick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;
    return (
      <Router>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-primary">
        <Link to="/" className="navbar-brand">BlueBox</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link to="/addemployee" className="nav-link">Добавить сотрудника<span class="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item active">
        <Link to="/list"  className="nav-link">Просмотреть список</Link>
      </li>
      <li className="nav-item">
        <Link class="nav-link" href="#">Pricing</Link>
      </li>
     
    </ul>

   
      </div>
    
    
      <button
          onClick={this.onLogoutclick}
          className="btn btn-small btn-danger"
        >
          Выйти
        </button>
        </nav>

     

        <Switch>
          <Route exact path="/" component={ListEmployee} />
          <Route path="/addemployee" component={AddEmployee} />
          <Route path="/editEmployee/:id" component={EditEmployee} />
          <Route path="/list" component={ListEmployee} />
        </Switch>

        <div className="container">
          <div className="jumbotron">
            <h1>Navbar example</h1>
            <p>
              This example is a quick exercise to illustrate how the default,
              static and fixed to top navbar work. It includes the responsive
              CSS and HTML, so it also adapts to your viewport and device.
            </p>
            <p>
              To see the difference between static and fixed top navbars, just
              scroll.
            </p>
          </div>
        </div>
        <div style={{ height: "70vh" }} className="container valign-wrapper">
          <div className="row">
            <div className="col s12 center-align">
              <h4>
                <b>Здравствуйте,</b> {user.name.split(" ")[0]}
                <p className="flow-text grey-text text-darken-1">
                  <span style={{ fontFamily: "monospace" }}>BlueBox</span>
                </p>
              </h4>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

//---------------------------REDUX------------------------------//
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Dashboard);

//---------------------------REDUX------------------------------//
