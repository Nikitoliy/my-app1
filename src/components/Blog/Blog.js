import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import TurnedInNotIcon from '@material-ui/icons/TurnedInNot';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';

import './Blog.scss';
import blogImage from "../../assets/blog-img.png";


function Blog() {
  return (
    <div className="blog-wrapper-inner">
      <div className="upper-line"></div>
      <div className="content-wrapper">
        <div className="image-wrapper">
          <img src={blogImage} alt="blog"></img>

          <div className="info">
            <div>
              <AccountCircleIcon style={{color: '#494949'}}/>
              <p>Admin</p>
            </div>

            <p className="time">08:15 AM</p>
          </div>
        </div>
        <div className="text-wrapper">
          <div className="header">
            <p>Bacon ipsum!</p>

            <div>
              <TurnedInNotIcon  style={{color: '#494949', fontSize: 20}}/>
              <ShareOutlinedIcon style={{color: '#494949', fontSize: 20}}/>
            </div>
          </div>
          <div className="text">
            <p> consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
              non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div className="more">
            <p>READ MORE</p>
            <MoreHorizOutlinedIcon style={{color: '#494949'}}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
