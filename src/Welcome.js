import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
    render() {
        return (
            <div className="Welcome">
                <div className="welcomeInfo wapper">
                    <h1>PokéPolaroid</h1>
                    <p>
                        Select a Pokémon region and get polaroids photos showing all the selected region's unique Pokémon with cheeky smiles! Each polaroid also contains information about the Pokémon.
                    </p>
                    <div className="flip">
                    <button className="buttonFlip" onClick={this.backClick}>Get started</button>
                        </div>
                </div>
            </div>
        );
    }
}