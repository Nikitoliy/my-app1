import React from 'react';
import VolumeUpOutlinedIcon from '@material-ui/icons/VolumeUpOutlined';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import './Player.scss';
import arrows from "../../assets/arrows.png";
import status from "../../assets/status.png";


function Player() {
  return (
    <div className="player-wrapper">
      <div className="player-control">
        <div className="header">
          <VolumeUpOutlinedIcon style={{ color: 'white' }}/>
          <TuneOutlinedIcon  style={{ color: 'white' }}/>
        </div>
        <div className="controls">
          <img src={arrows} alt="arrows"></img>
          <img src={status} alt="arrows"></img>
        </div>
      </div>
      <div className="divider"></div>
      <div className="player-info">
        <p class="x">In Dark, In Day</p>
        <div>
          <p>Maya Jane Coles</p>
          <div className="icons-wrapper">
          <ShareOutlinedIcon  style={{ color: '#494949', fontSize: 15}}/>
          <FavoriteBorderIcon style={{ color: '#494949', fontSize: 15}} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Player;
