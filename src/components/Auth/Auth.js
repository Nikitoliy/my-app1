import React from 'react';

import './Auth.scss';

import signin from "../../assets/sign-in.png";

function Auth() {
  return (
    <div className="auth-wrapper">
        <p>Sign in to your account</p>
        <div className="inputs">
          <input type="text" placeholder="Username"></input>
          <input type="text" placeholder="Password"></input>
        </div>
        <button>SIGN IN</button>

        <img src={signin} alt="asdasd" className="bottom-line"></img>
    </div>
  );
}

export default Auth;
