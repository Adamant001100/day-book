import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Landing.css";

class Landing extends Component {
  render() {
    return (
      <div className="intro">
       
          <div className="inner">
           
           
            <div className="content">
              <h1>BlueBox</h1>

              <Link className="landing" to="/register">
                РЕГИСТРАЦИЯ
              </Link>

              <Link className="landing" to="/login">
                АВТОРИЗАЦИЯ
              </Link>
            </div>
     
         </div>
    
       
    
     
      </div>
    );
  }
}

export default Landing;
