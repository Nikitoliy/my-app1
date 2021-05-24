import React from 'react';
import './Time.scss';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

function Time() {
  return (
    <div className="time-wrapper">
      <div>
          <AccessTimeIcon style={{ color: 'white', fontSize: 100}}/>
      </div>
      <div>
          <p>11:45</p>
          <p>December, 14, 2014</p>
      </div>
    </div>
  );
}

export default Time;