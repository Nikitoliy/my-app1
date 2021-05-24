import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import PlusOneIcon from '@material-ui/icons/PlusOne';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

import './Social.scss';

function Social() {
  return (
    <div className="social-wrapper">
      <div className="icons-wrapper">
        <FacebookIcon style={{ color: 'white' }}/>
        <TwitterIcon  style={{ color: 'white' }}/>
        <PlusOneIcon style={{ color: 'white' }} />
        <MailOutlineIcon  style={{ color: 'white' }}/>
      </div>
      <div className="info-wrapper">
        <p>227K</p>
        <p>153K</p>
        <p>73K</p>
        <p>21K</p>
      </div>
    </div>
  );
}

export default Social;