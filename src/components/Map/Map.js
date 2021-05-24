import React from 'react';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import map from "../../assets/map.png";
import './Map.scss';



function Map() {
  return (
    <div className="map-wrapper">
      <div className="upper-line"></div>
      <img src={map} alt="map"></img>
      <div className="info">
        <div>
          <p>Fabric Studio</p>
          <p>Knowhere Avenue</p>
          <p>Marvel Street 024</p>
          <p>Sun galaxy</p>
        </div>
        <div>
          <LocationOnOutlinedIcon style={{ color: '#f96e20', fontSize: 100}}/>
        </div>
      </div>
    </div>
  );
}

export default Map;
