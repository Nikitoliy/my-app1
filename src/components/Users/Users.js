import React from 'react';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import DoneOutlinedIcon from '@material-ui/icons/DoneOutlined';
import './Users.scss';


import userOne from "../../assets/user-1.png";
import userTwo from "../../assets/user-2.png";
import userThree from "../../assets/user-3.png";
import userFour from "../../assets/user-4.png";



function Users() {
  return (
    <div className="users-wrapper-inner">
    
      <div className="main-wrapper">
        <input type="text" placeholder="Search"></input>

        <div className="user-item">
          <img src={userOne} alt="user"></img>
          <div className="user-name">
            <p>Harry Roberts</p>
            <p>1 hour ago</p>
          </div>

          <AddCircleOutlineOutlinedIcon className="add" style={{ color: '#e2e0e0'}}/>
        </div>

        <div className="user-item">
          <img src={userTwo} alt="user"></img>
          <div className="user-name">
            <p>Harry Roberts</p>
            <p>5 min ago</p>
          </div>

          <AddCircleOutlineOutlinedIcon className="add" style={{ color: '#e2e0e0'}}/>
        </div>

        <div className="user-item">
          <img src={userThree} alt="user"></img>
          <div className="user-name">
            <p>Manik Rathee</p>
            <p>12 min ago</p>
          </div>

          <DoneOutlinedIcon className="add" style={{ color: '#f96e20'}}/>
        </div>

        <div className="user-item">
          <img src={userFour} alt="user"></img>
          <div className="user-name">
            <p>John Gugieri</p>
            <p>1 hour ago</p>
          </div>

          <AddCircleOutlineOutlinedIcon className="add" style={{ color: '#e2e0e0'}}/>
        </div>
      </div>
      <div className="upper-line"></div>
    </div>
  );
}

export default Users;
