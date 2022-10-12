import React, { useState } from 'react';
import './login.scss';

function Login() {
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    return (
      <div className="login">
        <div className="registerHeader">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          ></img>
        </div>
        <div className="registerContent">
        <form className='loginForm'>
          <h1>Sign In</h1>
          <input
            type="email"
            placeholder="Email or phone number"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="loginButton">
            Sign In
          </button>
          <span>
            New to Netflix? <b>Sign up now.</b>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>.
          </small>
        </form>
        </div>
      </div>
    );
}

export default Login;