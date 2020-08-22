import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

//-----------------------Redux------------------------------//
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
//-----------------------Redux------------------------------//

import "./Register.css";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      errors: {},
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    //Если вы вошли в систему и пользователь перешел на страницу регистрации, следует перенаправить их на панель инструментов.

    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  //---------------------------REDUX-----------------------------------//
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }
  //---------------------------REDUX-----------------------------------//

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    };

    //---------------------REDUX------------------------------//
    this.props.registerUser(newUser, this.props.history);
    //---------------------REDUX------------------------------//
  }; //--END CLASS

  render() {
    const { errors } = this.state;
    return (
      <div className="container">
        <div className="row justify-content-center">
        <div className="col-md-5">
        <div className="card">
        <div className="card-body py-md-4">
          <div className="col s8 offset-s2">
            <Link to="/" className="btn-flat waves-effect">
            <span className="glyphicon glyphicon-arrow-left"></span>  <i className="glyphicon glyphicon-arrow-left"></i>Вернуться
              назад
            </Link>
            <div>
              <h4>
                <b>Регистрация</b> ниже
              </h4>
              <p className="grey-text text-darken-1">
                У вас уже есть аккаунт? <Link to="/login">Войти</Link>
              </p>
            </div>

    
    
            <form _lpchecked="1" className="signup" noValidate onSubmit={this.onSubmit}>
          
          
              <div className="form-group">
               
                <input
                  onChange={this.onChange}
                  value={this.state.name}
                  error={errors.name}
                  id="name"
                  type="text"
                  className="form-control"
                  placeholder="Имя пользователя"
                  

                  //------------redux-------------//
                  classNames={classnames("", {
                    invalid: errors.name,
                  })}
                  //------------redux-----------//
                />

               
                <span className="text-danger">{errors.name}</span>
              </div>

            
            
              <div className="form-group">
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="text"
                  placeholder="Email"
                  className="form-control"
                  //------------redux-------------//
                  classNames={classnames("", {
                    invalid: errors.email,
                  })}
                  //------------redux-------------//
                />
                
                <span className="text-danger">{errors.email}</span>
              </div>

              <div className="form-group">
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  placeholder="Придумайте пароль"
                  className="form-control"
                  //------------redux-------------//
                  classNames={classnames("", {
                    invalid: errors.password,
                  })}
                  //------------redux-------------//
                />
                
                <span className="text-danger">{errors.password}</span>
              </div>

              <div className="form-group">
                <input
                  onChange={this.onChange}
                  value={this.state.password2}
                  error={errors.password2}
                  id="password2"
                  type="password"
                  placeholder="Подтвердите пароль"
                  className="form-control"
                  //------------redux-------------//
                  classNames={classnames("", {
                    invalid: errors.password2,
                  })}
                  //------------redux-------------//
                />

                
                <span className="text-danger">{errors.password2}</span>
              </div>

              <div className="d-flex flex-row align-items-center justify-content-center">
                <button
                  type="submit"
                  className="btn btn-primary"
                  mb-2
                >
                  Зарегистрироваться
                </button>
              </div>
            </form>
            </div>
          </div>
          </div>
          </div>
          </div> 
      </div>
    );
  }
}

//----------------------------REDUX-----------------------------------//

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));

//----------------------------REDUX-----------------------------------//
