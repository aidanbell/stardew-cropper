import React, { Component } from 'react';

import './Equipment.css';



class Equipment extends Component {
  constructor() {
    super();
    this.state = {
      sprinklers: 0,
      kegs: 0,
      sheds: 0,
      kegsPerShed: 0
    }
  }

  handleChange(evt) {
    evt.preventDefault();
    this.setState({
      [evt.target.name]: parseInt(evt.target.value)
    })
  }

  render() {
    return(
      <div className='equipment'>
        <img className="icon" alt="sprinkler" src='/icons/Iridium_Sprinkler.png'></img>
        <input type='number' name="sprinklers" onChange={this.handleChange.bind(this)} value={this.state.sprinklers}></input>
        <img className="icon" alt="kegs" src='/icons/Keg.png'></img>
        <input type='number' name="kegs" onChange={this.handleChange.bind(this)} value={this.state.kegs}></input>
        <img className="icon" alt="shed" src='/icons/Shed.png'></img>
        <input type='number' name="sheds" onChange={this.handleChange.bind(this)} value={this.state.sheds}></input>
        <input type='number' name="kegsPerShed" onChange={this.handleChange.bind(this)} value={this.state.kegsPerShed}></input>
      </div>
    )
  }
}

export default Equipment;
