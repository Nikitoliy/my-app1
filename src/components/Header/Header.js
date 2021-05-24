import React from 'react';
import PaletteIcon from '@material-ui/icons/Palette';
import TuneIcon from '@material-ui/icons/Tune';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import ForumIcon from '@material-ui/icons/Forum';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './Header.scss';
import { Badge } from '@material-ui/core';

import profileLogo from "../../assets/profile-image.png";

function Header() {
  return (
    <div className="header-wrapper">
      <div className="top-border"></div>
      <div className="menu-container">
          <div className="menu-item">
            <p>Dashboard</p>
            <PaletteIcon style={{ color: 'f86623' }}/>
          </div>
          <div className="menu-item">
            <p>Settings</p>
            <TuneIcon style={{ color: 'f86623' }}/>
          </div>
          <div className="menu-item">
            <p>Calendar</p>
            <CalendarTodayIcon style={{ color: 'f86623' }}/>
          </div>
          <div className="menu-item">
            <p>Message</p>
            <Badge badgeContent={5} color="primary" >
                <ForumIcon style={{ color: 'f86623' }}/>
            </Badge>
          </div>

          <div className="menu-item">
            <p className="fabric">Fabric</p>
            <ExpandMoreIcon style={{ color: 'f86623' }}/>
            <img src={profileLogo} alt="img" className="logo-image"/>
          </div>
      </div>
    </div>
  );
}

export default Header;
