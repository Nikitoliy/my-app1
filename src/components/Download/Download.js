import React from 'react';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';

import './Download.scss';

function Download() {
  return (
    <div className="download-wrapper">
      <div className="text-container">
        <div>
          <p>Downloading</p>
          <CloudDownloadIcon style={{ color: 'red' }}/>
        </div>
        <p>40%</p>
      </div>
      <div className="progress-bar">
          <div className="indicator"></div>
      </div>
    </div>
  );
}

export default Download;