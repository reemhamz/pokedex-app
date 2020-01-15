import React, { Component } from 'react';
import './App.css';
import jump from 'jump.js';
import Nav from './Nav';

export default class App extends Component {

    getStarted = () => {
        jump('.Nav',{
            duration: 1000,
                offset: 0,
                callback: undefined,
                // easing: easeInOutQuad,
                a11y: true
        }

        )
    }

    render() {
        return (
            <div className="Welcome">
                <div className="welcomeInfo wapper">
                    <h1>PokéPolaroid</h1>
                    <p>
                        Select a Pokémon region and get polaroid photos showing all the selected region's unique Pokémon with cheeky smiles! Each polaroid also contains information about the Pokémon.
                    </p>
                    <div className="buttonBox">
                    <button className="button" onClick={this.getStarted}>Get started</button>
                        </div>
                </div>
                
            </div>
        );
    }
}