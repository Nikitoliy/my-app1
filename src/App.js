import React from 'react';
import Header from './components/Header/Header'
import Album from './components/Album/Album'
import Weather from './components/Weather/Weather'
import Chart from './components/Chart/Chart'
import Download from './components/Download/Download'
import Social from './components/Social/Social'
import Auth from './components/Auth/Auth'
import Contact from './components/Contact/Contact'
import Blog from './components/Blog/Blog'
import Users from './components/Users/Users'
import Time from './components/Time/Time'
import ShoesSmall from './components/ShoesSmall/ShoesSmall'
import Map from './components/Map/Map'
import Player from './components/Player/Player'
import Shoes from './components/Shoes/Shoes'
import Messanger from './components/Messanger/Messanger'
import Last from './components/Last/Last'
import Calendar from './components/Calendar/Calendar'
import './App.scss'



import greetings from "./assets/greetings.png";



import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import Test from "./components/test/data";

am4core.useTheme(am4themes_animated);





function App() {








    return (

    <div className="app-wrapper">
      <div className="greetings">
        <img src={greetings} alt="greetings"></img>
      </div>

      <Header className="header"/>

      <div className="first-block">
        <div className="first-block-item">
          <Album  />
          <Weather />
        </div>
        <div className="first-block-item">
          <Chart  />
        </div>
        <div className="first-block-item">
          <Download  />
          <Social  />
          <Auth  />
        </div>
      </div>

      <div className="second-block">
        <div className="contact-wrapper">
            <Contact  />
        </div>

        <div className="blog-wrapper">
            <Blog  />
        </div>
      </div>

      <div className="third-block">
        <div className="users-wrapper">
            <Users />
        </div>

        <div className="second-item">
            <div>
              <Time />
              {/*<Calendar />*/}
            </div>
            <div>
              <Map />
            </div>
        </div>
      </div>

      <div className="fourth-block">
        <div className="item">
          <Player />
        </div>
        <div className="item">
          <Shoes />
            <ShoesSmall />
        </div>
        <div className="item">
            <Messanger />
            <Last />
        </div>
      </div>
        <Test/>
    </div>
  )
}

export default App;
