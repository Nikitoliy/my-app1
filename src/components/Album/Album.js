import React from 'react';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PeopleIcon from '@material-ui/icons/People';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import './Album.scss';


import imageOne from "../../assets/image-one.png";
import imageTwo from "../../assets/image-two.png";
import imageThree from "../../assets/image-three.png";

function Header() {
  return (
    <div className="album-wrapper">
        <div class="icons-container">
            <div className="icon">
                <NotificationsIcon style={{ color: 'fff' }}/>
            </div>
            <div className="icon">
                <PeopleIcon style={{ color: 'fff' }}/>
            </div>
            <div className="icon">
                <PhotoCameraIcon style={{ color: 'fff' }}/>
            </div>
            <div className="icon">
                <FavoriteIcon style={{ color: 'fff' }}/>
            </div>
            <div className="icon">
                <LocationOnIcon style={{ color: 'fff' }}/>
            </div>
        </div>
        <div className="album-content">
            <div className="image-container">
                <img src={imageOne} alt="some-img"/>
                <img src={imageTwo} alt="some-img"/>
                <img src={imageThree} alt="some-img"/>
            </div>
            <div className="navigation">
                <ArrowBackIcon style={{ color: 'rgba(247,7,63,1)' }} className="select"/>
                <p>Album One</p>
                <ArrowForwardIcon style={{ color: 'rgba(247,7,63,1)' }} className="select"/>
            </div>
        </div>
    </div>
  );
}

export default Header;
