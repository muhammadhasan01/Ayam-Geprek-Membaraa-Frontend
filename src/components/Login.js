import React from 'react';
import './Login.css'
import LoginContent from './LoginContent';

class Login extends React.Component {

  render() {
      return(
        <div className='login-container'>
            <div className='title-img'>
                <img src='./resources/title.png' alt='title'></img>
            </div>
            <div className = 'login-signup'>
              <div className = 'seperate'>Login</div><div className = 'seperate'>Signup</div>
              <div className = 'parts-container'>
                <LoginContent />
              </div>
            </div>
        </div>
      )
  }
}

export default Login;