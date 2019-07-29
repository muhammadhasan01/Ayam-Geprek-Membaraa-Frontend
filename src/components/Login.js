import React from 'react';
import './Login.css'

class Login extends React.Component {

  render() {
      return(
        <div className='login-container'>
            <div className='title-img'>
                <img src='./resources/title.png' alt='title'></img>
            </div>
            <h3>this is the LOGIN page.</h3>
        </div>
      )
  }
}

export default Login;