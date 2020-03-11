import React, { Component } from 'react';

import './CommTrack.css'
import jsonData from '../../data.js';



class CommTrack extends Component {

  componentDidMount() {
    let data = JSON.parse(JSON.stringify(jsonData))
    console.log(data)
  }

  render() {
    return(
      <div className="container" id="comm-track">
        <div className="room" id="craft">
          <div className="bundle" id=""></div>
          <div className="bundle" id=""></div>
          <div className="bundle" id=""></div>
          <div className="bundle" id=""></div>
          <div className="bundle" id=""></div>
          <div className="bundle" id=""></div>
        </div>
        <div className="room" id="pantry">
          <div className="bundle" id=""></div>
          <div className="bundle" id=""></div>
          <div className="bundle" id=""></div>
          <div className="bundle" id=""></div>
          <div className="bundle" id=""></div>
          <div className="bundle" id=""></div>
        </div>
        <div className="room" id="fish">
          <div className="bundle" id=""></div>
          <div className="bundle" id=""></div>
          <div className="bundle" id=""></div>
          <div className="bundle" id=""></div>
          <div className="bundle" id=""></div>
          <div className="bundle" id=""></div>
        </div>
        <div className="room" id="boiler">
          <div className="bundle" id=""></div>
          <div className="bundle" id=""></div>
          <div className="bundle" id=""></div>
        </div>
        <div className="room" id="bulletin">
          <div className="bundle" id=""></div>
          <div className="bundle" id=""></div>
          <div className="bundle" id=""></div>
          <div className="bundle" id=""></div>
          <div className="bundle" id=""></div>
        </div>
        <div className="room" id="vault">
          <div className="bundle" id=""></div>
          <div className="bundle" id=""></div>
          <div className="bundle" id=""></div>
          <div className="bundle" id=""></div>
        </div>
        <div className="room" id="abandoned">
          <div className="bundle" id=""></div>
        </div>
      </div>
    )
  }
}

export default CommTrack;
