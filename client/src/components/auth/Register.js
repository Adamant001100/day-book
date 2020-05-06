import React, { Component,  } from 'react';
import {Link, withRouter } from 'react-router-dom';

//-----------------------Redux------------------------------//
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';
import classnames from 'classnames'
//-----------------------Redux------------------------------//

import './Register.css';

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
      if(nextProps.errors) {
        this.setState({
          errors: nextProps.errors
        });
      }
    }
   //---------------------------REDUX-----------------------------------//

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };


    onSubmit = e => {
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
          return(
               <div className="container">
                 <div className="Register-Border">
          
                   
                <div className="col s8 offset-s2">
              <Link to="/" className="btn-flat waves-effect">
                    <i className="material-icons left">keyboard_backspace</i>Вернуться назад
              </Link>

              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Регистрация</b> ниже
              </h4>
              <p className="grey-text text-darken-1">
                У вас уже есть аккаунт? <Link to="/login">Войти</Link>
              </p>
            </div>

            <form noValidate onSubmit={this.onSubmit}>
                <div className="input-field col s12">
                    <input
                    onChange={this.onChange}
                    value={this.state.name}
                    error={errors.name}
                    id="name"
                    type="text"
                    //------------redux-------------//
                    className={classnames("", {
                      invalid: errors.name
                    })}
                  //------------redux-----------//
                />
                <label htmlFor="name">Имя пользователя</label>
                  <span className="red-text">{errors.name}</span>
               </div>

               <div className="input-field col s12">
                    <input
                    onChange={this.onChange}
                    value={this.state.email}
                    error={errors.email}
                    id="email"
                    type="email"
                //------------redux-------------//
                    className={classnames("", {
                      invalid: errors.email
                    })}
                //------------redux-------------//
                />
                <label htmlFor="email">Email</label>
                  <span className="red-text">{errors.email}</span>
               </div>

               <div className="input-field col s12">
                    <input
                    onChange={this.onChange}
                    value={this.state.password}
                    error={errors.password}
                    id="password"
                    type="password"
                    //------------redux-------------//
                    className={classnames("", {
                      invalid: errors.password
                    })}
                    //------------redux-------------//
                />
                <label htmlFor="password">Придумайте пароль</label>
                  <span className="red-text">{errors.password}</span>
               </div>

               <div className="input-field col s12">
                    <input
                    onChange={this.onChange}
                    value={this.state.password2}
                    error={errors.password2}
                    id="password2"
                    type="password"
                    //------------redux-------------//
                    className={classnames("", {
                      invalid: errors.password2
                    })}
                    //------------redux-------------//
                />
                              
                <label htmlFor="password2">Подтвердите пароль</label>
                  <span className="red-text">{errors.password2}</span>
               </div>                     
                  
                                                                                                
               <label className="orange">
                      <input className="with-gap" type="radio"
                      onChange={this.onChangeCheckbox}
                      id="checkbox"
                      value="Passenger" checked={this.state.checkbox==='Passenger'}
                      />
                     <div className="layer"></div>
                     <div className="button"><span></span></div>  
                </label>
                  

                         
                <label className="blue">
                    <input className="with-gap" type="radio"
                     onChange={this.onChangeCheckbox}
                     id="checkbox"
                     value="Driver" checked={this.state.checkbox==='Driver'}
                     />
                      <div className="layer"></div>
                     <div className="button"><span></span></div> 
                </label>
                  
                
              <div className="register-button">
              <button type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3">
                  Зарегистрироваться
                  
             </button>
              </div>            
  
                </form>
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
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));

//----------------------------REDUX-----------------------------------//