import React, { Component }  from 'react';
import {Link} from 'react-router-dom';

import './Landing.css';

class Landing extends Component {
  render() {
    return(   
   
   <div>
       <section className="intro">
        <div className="inner">
          <div className="content">
            <h1>QazCarbon</h1>
           
            <Link className="landing" to="/register">РЕГИСТРАЦИЯ</Link>
           
            <Link className="landing" to="/login">АВТОРИЗАЦИЯ</Link>  
        
        </div>

      
     </div>
      
  </section>
  <footer className="footer">
                      <div className="copyright-area">
                       <div className="copyright-text">
                            <p>Copyright &copy; 2020 Все права защищены <a href="https://www.instagram.com/adamant001100/">BlueBox</a></p>
                        </div>
                        </div>

                </footer>
</div>

              


   
   );

   

   
  }

  
}

export default Landing;
