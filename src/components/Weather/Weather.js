import React from 'react';
import WbCloudyOutlinedIcon from '@material-ui/icons/WbCloudyOutlined';

import './Weather.scss';


function Weather() {
  return (
    <div className="weather-wrapper">
        <div className="weather-info">
            <div className="temp">
                <p>PM</p>
                <p>14/12</p>
            </div>
            <div className="temp-2">
                <p>5 &#176;</p>
            </div>
        </div>
        <div className="divider"></div>
        <WbCloudyOutlinedIcon style={{ color: 'red', fontSize: 45 }}/>
    </div>
  );
}

export default Weather;