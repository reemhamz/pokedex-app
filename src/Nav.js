import React, { Component } from 'react';
import './App.css';

export default class App extends Component {

    constructor() {
        super();
        this.state = {
            regionSelected: "",
        }
    }
    
    readRegion = (e) => {
        e.preventDefault();
        
        const regionName = e.target.value;
        console.log(regionName)
        this.props.getRegionProp(regionName);
        return regionName
    }

    render() {
        return (
            <div className="Nav">
                <form className="target" action="">
                    
                    <label htmlFor="regionChoice"></label>

                    <select name="timeChoice" id="regionChoice" onChange={this.readRegion}>

                        <option value="" >Select Region</option>
                        <option value="kanto" >Kanto</option>
                        <option value="johto" >Johto</option>
                        <option value="hoenn" >Hoenn</option>
                        <option value="sinnoh" >Sinnoh</option>

                    </select>

                </form>
            </div>
        );
    }
}