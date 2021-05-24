import React from 'react';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import stars from "../../assets/stars.png";
import './Messanger.scss';



function Messanger() {
  return (
    <div className="messanger-wrapper">
      <div className="header">
        <p>Ennio5</p>
        <div></div>
      </div>
      <div className="history">
        <div>
          <p>Hi there!</p>

          <p>How are you?</p>
        </div>
        <div>
          <p>Hi, im good!</p>
        </div>
      </div>
      <div className="message">
          <input type="text" placeholder='Write a message'/>
        <SendOutlinedIcon style={{ color: '#f96e20'}} />
      </div>
    </div>
  );
}

export default Messanger;
