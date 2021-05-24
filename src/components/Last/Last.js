import React from 'react';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import ComputerIcon from '@material-ui/icons/Computer';
import SmartphoneIcon from '@material-ui/icons/Smartphone';

import './Last.scss';

function Last() {
  return (
    <div className="last-wrapper">
        <div>
          <DesktopWindowsIcon  style={{ color: 'white'}}/>
          <ComputerIcon style={{ color: 'white'}}/>
          <SmartphoneIcon style={{ color: 'white'}}/>
        </div>
        <div>
          <button>Donwload the kit now</button>
        </div>
    </div>
  );
}

export default Last;