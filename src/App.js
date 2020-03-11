import React, { Component } from 'react';

import CommTrack from './components/CommTrack/CommTrack';
import Crops from './components/Crops/Crops';
import Equipment from './components/Equipment/Equipment';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <CommTrack />
        <Equipment />
        <Crops />
      </div>
    );
}
}

export default App;
