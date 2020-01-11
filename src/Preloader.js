import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <img className="pokeImg" src={require("./assets/dexGif.gif")} alt=""/>
            </div>
        );
    }
}