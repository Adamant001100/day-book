import React, {Component} from 'react';
import {Link} from 'react-router-dom';

//---------------------REDUX-------------------------------//
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';
import classnames from 'classnames';
//---------------------REDUX-------------------------------//

import './Login.css';

class Login extends Component {
    constructor() {
      super();
      this.state = {
        email: "",
        password: "",
        errors: {}
      };
    }

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
    componentDidMount() {
       // If logged in and user navigates to Login page, should redirect them to dashboard
       if(this.props.auth.isAuthenticated) {
         this.props.history.push("/dashboard");
       }
    }
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//


    //---------------------REDUX-------------------------------//
     //LifeCyrcle 
    componentWillReceiveProps(nextProps) {
        if(nextProps.auth.isAuthenticated) {
          this.props.history.push("/dashboard"); // push user to dashboard when they login
        }
          if(nextProps.errors) {
           this.setState({
            errors: nextProps.errors
          });
        }
      }
      //---------------------REDUX-------------------------------//

  onChange = e => {
      this.setState({ [e.target.id]: e.target.value });
    };
  onSubmit = e => {
      e.preventDefault();
  const userData = {
        email: this.state.email,
        password: this.state.password
      };

      //---------------------REDUX-------------------------------//
      this.props.loginUser(userData);
      // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
      //---------------------REDUX-------------------------------//
   
};

render() {
      const { errors } = this.state;
    
      return (
        <div className="container">
          <div className="Login-Border">
       
        
          <div style={{ marginTop: "6rem" }} className="row">
            <div className="col s8 offset-s2">
              <Link to="/" className="btn-flat waves-effect">
                <i className="material-icons left">keyboard_backspace</i>Вернуться назад
              </Link>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <h4>
                  <b>Войти</b> ниже
                </h4>
                <p className="grey-text text-darken-1">
                  У Вас нет аккаунта? <Link to="/register">Регистрация</Link>
                </p>
              </div>
              <form noValidate onSubmit={this.onSubmit}>
                <div className="input-field col m12 s12">
                  <input
                    onChange={this.onChange}
                    value={this.state.email}
                    error={errors.email}
                    id="email"
                    type="email"
                    //---------------------REDUX-------------------------------//
                    className={classnames("", {
                      invalid: errors.email || errors.emailnotfound
                    })}
                    //---------------------REDUX-------------------------------//
                  />
              
              
                  <label htmlFor="email">Email</label>
                  <span className="red-text">
                    {errors.email}
                    {errors.emailnotfound}
                  </span>
                </div>
                <div className="input-field col m12 s12">
                  <input
                    onChange={this.onChange}
                    value={this.state.password}
                    error={errors.password}
                    id="password"
                    type="password"
                    //---------------------REDUX-------------------------------//
                    className={classnames("", {
                      invalid: errors.password || errors.passwordincorrect
                    })}
                    //---------------------REDUX-------------------------------//

                  />
                    
                  <label htmlFor="password">Пароль</label>
                  <span className="red-text">
                         {errors.password}
                         {errors.passwordincorrect}
                  </span>
                </div>
       
                 <div className="row">
                <div className="login-button">
                  <button type="submit"
                    className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                  >
                    ВОЙТИ В СИСТЕМУ
                  </button>
                </div>
                </div>
               
              </form>
            </div>
          </div>
        
   
          </div>
        </div>

      );
    }
  }
 
//---------------------REDUX-------------------------------//
Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);

//---------------------REDUX-------------------------------//
