import React, { Component } from "react";
import { Link } from "react-router-dom";

//---------------------REDUX-------------------------------//
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
//---------------------REDUX-------------------------------//

import "./Login.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
    };
  }

  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

  //---------------------REDUX-------------------------------//
  //LifeCyrcle
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard"); // push user to dashboard when they login
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }
  //---------------------REDUX-------------------------------//

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password,
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
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="card">
              <div className="card-body py-md-4">
                <Link to="/" className="btn-flat waves-effect">
                  <span className="glyphicon glyphicon-arrow-left"></span>{" "}
                  <i className="glyphicon glyphicon-arrow-left"></i>Вернуться
                  назад
                </Link>
                <div className="col s8 offset-s2">
                  <h4>
                    <b>Войти</b> ниже
                  </h4>
                  <p className="grey-text text-darken-1">
                    У Вас нет аккаунта? <Link to="/register">Регистрация</Link>
                  </p>
                </div>

                <form
                  _lpchecked="1"
                  className="signin"
                  noValidate
                  onSubmit={this.onSubmit}
                >
                  <div className="form-group">
                    <div className="input-field col m12 s12">
                      <input
                        onChange={this.onChange}
                        value={this.state.email}
                        error={errors.email}
                        id="email"
                        type="email"
                        className="form-control"
                        placeholder="E-mail"
                        //---------------------REDUX-------------------------------//
                        classNames={classnames("", {
                          invalid: errors.email || errors.emailnotfound,
                        })}
                        //---------------------REDUX-------------------------------//
                      />

                      <span className="text-danger">
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
                        className="form-control"
                        placeholder="Введите пароль"
                        //---------------------REDUX-------------------------------//
                        classNames={classnames("", {
                          invalid: errors.password || errors.passwordincorrect,
                        })}
                        //---------------------REDUX-------------------------------//
                      />

                      <span className="text-danger">
                        {errors.password}
                        {errors.passwordincorrect}
                      </span>
                    </div>

                    <div className="d-flex flex-row align-items-center justify-content-center">
                      <button type="submit" className="btn btn-primary">
                        ВОЙТИ В СИСТЕМУ
                      </button>
                    </div>
                  </div>
                </form>
              </div>
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
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { loginUser })(Login);

//---------------------REDUX-------------------------------//
