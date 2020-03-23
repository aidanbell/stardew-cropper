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
    this.makeCrops();
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
    this.makeCrops()
    this.setState({
      season: evt.target.value,
    })
  }

  makeCrops() {
    let crops = [];
    if (this.state.season === 'spring') {
      crops = data.slice(2, 14)
    }
    if (this.state.season === 'summer') {
      crops = data.slice(14, 25)
    }
    if (this.state.season === 'fall') {
      crops = data.slice(25)
    }
    this.setState({
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
    let calculateSell = (c) => {
      let sell = 0;
      if (c.best === "Wine") {
        sell = c.sellPrice * 3;
      }
      if (c.best === "Pickles") {
        sell = c.sellPrice * 2 + 50;
      }
      if (c.best === "Juice") {
        sell = c.sellPrice * 2.25;
      }
      if (c.best === "Coffee") {
        sell = 150;
      }
      if (c.best === "Pale_Ale") {
        sell = 300;
      }
      if (c.best === "Beer") {
        sell = 200;
      }
      if (this.state.artisan) {
        sell += sell * 0.4;
      }
      return sell;
    }
    return(
      <div className="crop-table">
        <select id="season" onChange={this.handleChange} value={this.state.season}>
          <option value="spring">spring</option>
          <option value="summer">summer</option>
          <option value="fall">fall</option>
        </select>
        <div id="tiller" onClick={this.handleRadio}>
          <input type="radio" value="tiller" checked={this.state.tiller}></input>Tiller Profession
        </div>
        <div id="artisan" onClick={this.handleRadio}>
          <input type="radio" value="artisan" checked={this.state.artisan}></input>Artisan Profession
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
                <th onClick={this.sortBy} id="artisanGood">Artisan</th>
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
                    <td>
                      {c.best ?
                      <span><img className="table-icon" alt={c.best} src={`/icons/${c.best}.png`}/>{calculateSell(c)}</span>
                      :
                      <span></span>}
                    </td>
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
