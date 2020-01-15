import React, { Component } from 'react';
import './App.css';
import jump from 'jump.js';

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
        
        jump('.cardBody', {
            duration: 1000,
                offset: 0,
                callback: undefined,
                // easing: easeInOutQuad,
                a11y: false
        })

        return regionName
    }

    render() {
        return (
            <div className="Nav">
                <div className="navInfo">
                    
                </div>
                <form className="target" action="">
                    
                    <label htmlFor="regionChoice" className="visuallyHidden" >
                        Select a region from the drop-down menu below.
                    </label>

                    <select className="region" name="region" id="regionChoice" onChange={this.readRegion} >

                        <option tabIndex="0" value="">Select Region</option>
                        <option tabIndex="0" value="kanto" >Kanto</option>
                        <option tabIndex="0" value="johto" >Johto</option>
                        <option tabIndex="0" value="hoenn" >Hoenn</option>
                        <option tabIndex="0" value="sinnoh" >Sinnoh</option>

                    </select>

                </form>
            </div>
        );
    }
}