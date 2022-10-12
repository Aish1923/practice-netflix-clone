import React, { useRef, useState } from "react";
import "./register.scss";

function Register() {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const emailRef=useRef();
  const passwordRef=useRef();
  const handleStart=()=>{
    setEmail(emailRef.current.value);
  }
  const handleFinish=()=>{
    setPassword(passwordRef.current.value);
  }
  return (
    <div className="registerContainer">
      <div className="registerHeader">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
          alt=""
        ></img>
        <button className="SignInButton">Sign In</button>
      </div>
      <div className="registerContent">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {!email ? (
          <div className="registerInput">
            <input type="email" placeholder="Enter Email Address" ref={emailRef} />
            <button className="registerButton" onClick={()=>handleStart()}>
              Get Started
            </button>
          </div>
        ) : (
          <form className="registerInput">
            <input type="password" placeholder="Enter Password" ref={passwordRef} />
            <button className="registerButton" onClick={()=>handleFinish()}>
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Register;
