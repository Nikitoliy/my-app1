import React from 'react';
import VolumeUpOutlinedIcon from '@material-ui/icons/VolumeUpOutlined';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import stars from "../../assets/stars.png";
import './Shoes.scss';



function Shoes() {
  return (
    <div className="shoes-wrapper">
      <div className="divider"></div>
      <div className="image"></div>
      <div className="info">
        <div>
          <p>Nike</p>
          <p>135$</p>
        </div>

        <div>
          <p>Mercurial</p>
          <img src={stars} alt="stars"></img>
        </div>

      </div>
      <div></div>
    </div>
  );
}

export default Shoes;
