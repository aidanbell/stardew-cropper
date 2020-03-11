import React, { Component } from 'react';

import jsonData from '../../data.js';
import './Crops.css';


let data = JSON.parse(JSON.stringify(jsonData))

class Crops extends Component {
  constructor() {
    super();
    this.state = {
      season: 'spring',
      tiller: false,
      artisan: false

    }
    this.handleChange = this.handleChange.bind(this);
    this.sortBy = this.sortBy.bind(this);
    this.handleRadio = this.handleRadio.bind(this);
  }

  componentDidMount() {
    console.log(data);
  }

  handleRadio(evt) {
    console.log(evt.target)
    if (evt.target.value === 'tiller' || evt.target.id === 'tiller') {
      if(this.state.tiller) {
        this.setState({
          tiller: false
        })
      } else {
        this.setState({
          tiller: true
        })
      }
    }
    if (evt.target.value === 'artisan' || evt.target.id === 'artisan') {
      if(this.state.artisan) {
        this.setState({
          artisan: false
        })
      } else {
        this.setState({
          artisan: true
        })
      }
    }
  }

  handleChange(evt) {
    let crops = [];
    if (evt.target.value === 'spring') {
      crops = data.slice(2, 14)
    }
    if (evt.target.value === 'summer') {
      crops = data.slice(14, 25)
    }
    if (evt.target.value === 'fall') {
      crops = data.slice(25)
    }
    this.setState({
      season: evt.target.value,
      crops: crops
    })
  }

  sortBy(evt) {
    let crops = [];
    if (evt.target.classList.contains('active')) {
      crops = this.state.crops.sort((a, b) => parseFloat(b[evt.target.id]) - parseFloat(a[evt.target.id]))
    } else {
      crops = this.state.crops.sort((a, b) => parseFloat(a[evt.target.id]) - parseFloat(b[evt.target.id]))
    }
    let active = document.querySelector('.active');
    if (active) active.classList.remove('active');


    let field = document.querySelector(`#${evt.target.id}`)
    field.classList.add('active')

    this.setState({
      crops: crops
    })
  }

  render() {
    return(
      <div className="crop-table">
        <select id="season" onChange={this.handleChange} value={this.state.season}>
          <option value="spring">spring</option>
          <option value="summer">summer</option>
          <option value="fall">fall</option>
        </select>
        <div id="tiller" onClick={this.handleRadio}>
          <input type="radio" value="tiller" checked={this.state.tiller}></input>
          <label for="tiller">Tiller Profession</label>
        </div>
        <div id="artisan" onClick={this.handleRadio}>
          <input type="radio" value="artisan" checked={this.state.artisan}></input>
          <label for="artisan">Artisan Profession</label>
        </div>
        {this.state.crops ?
          <table>
            <thead>
              <tr id="heading">
                <th onClick={this.sortBy} id="crop">Crop</th>
                <th onClick={this.sortBy} id="growTime">Grow Time</th>
                <th onClick={this.sortBy} id="regrows">Regrows?</th>
                <th onClick={this.sortBy} id="maxHarvests">Max Harvests</th>
                <th onClick={this.sortBy} id="yields">Yield</th>
                <th onClick={this.sortBy} id="seedCost">Seed Cost</th>
                <th onClick={this.sortBy} id="sellPrice">Base Sell</th>
              </tr>
            </thead>
            <tbody>
              {this.state.crops.map(c => {
                return(
                  <tr>
                    <td>{c.crop}</td>
                    <td>{c.growTime}</td>
                    <td>{c.regrows ? `every ${c.regrowTime} days` : "---"}</td>
                    <td>{c.maxHarvests}</td>
                    <td>{c.yields}</td>
                    <td>{c.seedCost}</td>
                    <td>{c.sellPrice}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          :
          <p>select a crop</p>
        }
      </div>
    )
  }
}

export default Crops;
