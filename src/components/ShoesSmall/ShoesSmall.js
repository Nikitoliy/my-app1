import React from 'react';
import './ShoesSmall.scss';

import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/styles';

import ShoesSmallImage from "../../assets/shoe-small.png";


const RedRadio = withStyles({
  root: {
    color: '#f96e20',
    '&$checked': {
      color: '#f96e20',
    },

    body1: {
      fontSize: 12
    }
  },
  checked: {},
})(props => <Radio color="default" {...props} />);

function ShoesSmall() {
  return (
    <div className="shoes-small-wrapper">
      <div>
          <img src={ShoesSmallImage} alt="shoe"></img>
          <button>Checkout</button>
      </div>
      <div>
        <div className="price-wrapper">
          <p><strike>165$</strike></p>
          <p>135$</p>
        </div>
          <FormControlLabel value="female" control={<RedRadio />} label="Standart shipping"/>
          <FormControlLabel value="female" control={<RedRadio />} label="Express shipping"/>
      </div>
    </div>
  );
}

export default ShoesSmall;
