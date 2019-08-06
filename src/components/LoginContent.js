import React from 'react';
import './LoginContent.css';

function LoginContent(){
    return (
        <div className = 'login-content'>
            <form>
                <div className = 'inputs'>Username : <input type = 'text' name = 'username'></input></div>
                <div className = 'inputs'>Password : <input type = 'password' name = 'password'></input></div>
            </form>
        </div>
    )
}

export default LoginContent;