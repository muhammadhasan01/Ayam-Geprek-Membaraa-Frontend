import React from 'react';
import './Login.css'

class Login extends React.Component {
  constructor() {
    super()

    this.state = {
        login: true, //false => signup
        username: '',
        password: '',
      }
      this.handleChange = this.handleChange.bind(this)
      this.changeLoginSignUp = this.changeLoginSignUp.bind(this)
    }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  changeLoginSignUp(login) {
    this.setState({
      login: login
    })
  }

  render() {
    if(!this.props.loggedin)
    {
      return(
        <div className='login-container'>
            <div className='title-img'>
                <img src='./resources/title.png' alt='title'></img>
            </div>
            <div className='form-container'>
              <div className='header-container'>
                <div className='form-header'>
                    <p style={this.state.login ? {color: 'black'} : {color: '#999'}}
                    onClick={() => this.changeLoginSignUp(true)}>LOGIN</p>
                </div>
                <div className='form-header'>
                    <p style={!this.state.login ? {color: 'black'} : {color: '#999'}}
                    onClick={() => this.changeLoginSignUp(false)}>SIGN UP</p>
                </div>
              </div>
                
              <div className='hl'></div>

              <div className='form-body'>
                  <div className='input-field'>
                    <p>USERNAME:</p>
                    <input 
                      type="text" name="username" 
                      placeholder="Username" value={this.state.username} 
                      onChange={this.handleChange}>
                    </input>
                  </div>
                  <div className='input-field'>
                    <p>PASSWORD:</p>
                    <input 
                      type="password" name="password" 
                      placeholder="Password" value={this.state.password} 
                      onChange={this.handleChange}>
                    </input>
                  </div>

                  <div className="submitbtn-container">
                    <div className="submitbtn" style={{backgroundColor: '#ddd'}} onClick={ () => this.props.requestLoginSignUp(this.state.login, this.state.username, this.state.password) }>
                      {this.state.login ? <p>LOG IN</p> : <p>SIGN UP</p>}
                    </div>
                  </div>
              </div>

            </div>
        </div>
      )
    }
    else {
      return(
        <div className='login-container'>
            <div className='title-img'>
                <img src='./resources/title.png' alt='title'></img>
            </div>

            <div className='hi-txt-1'>Hello</div>
            <div className='hi-txt-2'>{this.props.sessionUname}!</div>

                
              <div className="signoutbtn-container">
                    <div className="signoutbtn" style={{backgroundColor: '#eee'}} onClick={this.props.signout}>
                      <p>SIGN OUT</p>
                    </div>
              </div>
        </div>
      )
      
    }
  }
}

export default Login;