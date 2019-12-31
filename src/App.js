import React, { Component } from 'react';
import './App.css';
import PokemonCard from './PokemonCard';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      result: [],
      pokemonName: "",
      pokemonID: [],
      introRegion: "",
      primaryType: "",
      secondaryType: "",
    }
  }
  
  componentDidMount() {
    
      axios({
        method:'GET',
        url: `https://pokeapi.co/api/v2/pokemon/?limit=5`,
        dataResponse: 'json',
      })
        .then((dataOne) => {
          console.log(dataOne.data.results)

          this.setState({
            result: dataOne.data.results
          })

          this.state.result.map(async(fetchInfo) => {
            return axios({
                method: 'GET',
                url: `${fetchInfo.url}`,
                dataResponse: 'json',
              })
              .then( (dataTwo) =>{
                
                console.log([dataTwo.data.id])

                this.setState({
                  pokemonID: [dataTwo.data],
                })
              });
          })
        });
  }

    render() {
        return (
            <div className="App">
              
            <h1>Pokédex!</h1>
            
            {this.state.pokemonID.map((theID) => {
              return console.log("hey this is the pokemon info",theID)
            })}
            {this.state.result.map((pokeName)  =>{
              return (
                <h3>{pokeName.name}</h3>
                )
              })}
              {/* {this.state.pokemonInfo} */}
            
            {/* <PokemonCard /> */}
            
            
            </div>
        );
    }
}

export default App;