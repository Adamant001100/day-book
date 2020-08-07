import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Create from '../crud/create';
import Edit from '../crud/edit';
import List from '../crud/list';

//---------------------------REDUX------------------------------//
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
//---------------------------REDUX------------------------------//

import './Dashboard.css';
import M from  'materialize-css/dist/js/materialize.min.js';

class Dashboard extends Component {

    //=================Menu============================//
    componentDidMount() {
        let sidenav = document.querySelector('#slide-out');
        M.Sidenav.init(sidenav, {});
    }
   //=================Menu============================//
  
    onLogoutclick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };
   
    render() {
        const {user} = this.props.auth;
        return(
            
            <Router>
                <nav >
            <Link  data-target="slide-out" className="sidenav-trigger show-on-large"><i className="material-icons">menu</i></Link>

    <div  className="nav-wrapper">
      <Link path="/" className="brand-logo">QazCarbon</Link>
      <ul id="slide-out" className="sidenav">
        <li className=""><Link to={'/create'} className="nav-link">Заполнить данные</Link></li>
        <li><Link to={'/list'} className="nav-link">Лист</Link></li>
        
      </ul>
    </div>
  </nav>                             
                   <Switch>
                       <Route exact path='/' component={Create} />
                       <Route  path='/create' component={ Create } />
                       <Route path='/edit/:id' component={ Edit } />
                       <Route path='/list' component={ List } />
                   </Switch>

                    
             <div style={{ height: "70vh" }} className="container valign-wrapper">
                     <div className="row">
                         <div className="col s12 center-align">
                             <h4>
                                 <b>Здравствуйте,</b> {user.name.split(" ")[0]}
                                 <p className="flow-text grey-text text-darken-1">
                                
                                 <span style={{ fontFamily: "monospace" }}>QazCarbon</span>
                                 </p>
                             </h4>
                             <button onClick={this.onLogoutclick}
                                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                                  >
                                    ВЫЙТИ ИЗ СИСТЕМЫ
                             </button>
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