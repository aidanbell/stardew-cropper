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
      <div class="container" id="comm-track">
        <div class="room" id="craft">
          <div class="bundle" id=""></div>
          <div class="bundle" id=""></div>
          <div class="bundle" id=""></div>
          <div class="bundle" id=""></div>
          <div class="bundle" id=""></div>
          <div class="bundle" id=""></div>
        </div>
        <div class="room" id="pantry">
          <div class="bundle" id=""></div>
          <div class="bundle" id=""></div>
          <div class="bundle" id=""></div>
          <div class="bundle" id=""></div>
          <div class="bundle" id=""></div>
          <div class="bundle" id=""></div>
        </div>
        <div class="room" id="fish">
          <div class="bundle" id=""></div>
          <div class="bundle" id=""></div>
          <div class="bundle" id=""></div>
          <div class="bundle" id=""></div>
          <div class="bundle" id=""></div>
          <div class="bundle" id=""></div>
        </div>
        <div class="room" id="boiler">
          <div class="bundle" id=""></div>
          <div class="bundle" id=""></div>
          <div class="bundle" id=""></div>
        </div>
        <div class="room" id="bulletin">
          <div class="bundle" id=""></div>
          <div class="bundle" id=""></div>
          <div class="bundle" id=""></div>
          <div class="bundle" id=""></div>
          <div class="bundle" id=""></div>
        </div>
        <div class="room" id="vault">
          <div class="bundle" id=""></div>
          <div class="bundle" id=""></div>
          <div class="bundle" id=""></div>
          <div class="bundle" id=""></div>
        </div>
        <div class="room" id="abandoned">
          <div class="bundle" id=""></div>
        </div>
      </div>
    )
  }
}

export default CommTrack;
