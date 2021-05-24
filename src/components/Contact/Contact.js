import React from 'react';

import './Contact.scss';
import copy from "../../assets/copy.png";


function Contact() {
  return (
    <div className="auth-wrapper">
      <img src={copy} alt="copy" className="upper-line"></img>

      <div className="form-wrapper">
        <p>Contact us</p>

        <input type="text" placeholder="Name"></input>
        <input type="text" placeholder="Subject"></input>
        <input type="text" placeholder="Message"></input>
      </div>

      <button>SEND</button>
      
    </div>
  );
}

export default Contact;
