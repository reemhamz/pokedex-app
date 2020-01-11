import React, { Component } from 'react';
import './App.css';

export default class App extends Component {

    sendRegion = (e) => {
        e.preventDefault();
        console.log(e.target.value)
        const regionInfo = e.target.value;
        this.props.getRegionProp(regionInfo);
    }


    render() {
        return (
            <div className="App">
                <form className="target" action="">
                    
                    <label htmlFor="regionChoice"></label>

                    <select name="timeChoice" id="regionChoice" onChange={this.sendRegion}>

                        <option value="" >Select Region</option>
                        <option value="kanto" >Kanto</option>
                        <option value="johto" >Johto</option>
                        <option value="hoenn" >Hoenn</option>

                    </select>

                </form>
            </div>
        );
    }
}