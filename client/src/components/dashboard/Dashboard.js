import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import AddEmoloyee from '../crud/AddEmployee';
import Edit from '../crud/edit';
import List from '../crud/list';

//---------------------------REDUX------------------------------//
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
//---------------------------REDUX------------------------------//

import './Dashboard.css';

class Dashboard extends Component {

    onLogoutclick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };
   
    render() {
        const {user} = this.props.auth;
        return(
            
            <Router>
                <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                
                    <Link to=""  className="navbar-brand">BlueBox system</Link>

                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                        
                            <li className="navbar-item">
                            <Link to="/addemployee" className="navbar-link">Добавить данные</Link>
                            </li>

                            <li className="navbar-item">
                            <Link to="/list" className="navbar-link">Просмотреть список</Link>
                            </li>
                        </ul>

                        <button onClick={this.onLogoutclick}
                                  className="btn btn-small waves-effect waves-light hoverable blue accent-3">
                                    Выйти
                            </button>
                    </div>
            </nav>                             
                   <Switch>
                       <Route exact path='/' component={AddEmoloyee} />
                       <Route  path='/addemployee' component={ AddEmoloyee } />
                       <Route path='/edit/:id' component={ Edit } />
                       <Route path='/list' component={List} />
                   </Switch>

                    
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
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser }
)(Dashboard);

//---------------------------REDUX------------------------------//