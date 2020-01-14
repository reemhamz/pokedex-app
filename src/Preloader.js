import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
    render() {
        return (
            <div className="Preloader">
                <img className="pokeImg" src={require("./assets/dexGif.gif")} alt=""/>
            </div>
        );
    }
}