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
      typeOne: "",
      typeTwo: "",
    }
  }
  
  componentDidMount() {
    
      axios({
        method:'GET',
        url: `https://pokeapi.co/api/v2/pokemon/?limit=20`,
        dataResponse: 'json',
      })
        .then((data) => {
          console.log(data.data.results)          
          
          
          this.setState({
            result: data.data.results
          })

          this.state.result.map((fetchInfo) => {
            axios({
                method: 'GET',
                url: `${fetchInfo.url}`,
                dataResponse: 'json',
              })
              .then( (dataTwo) =>{
                console.log('this is the data of the second axios call', dataTwo)
                console.log(dataTwo.data.id)

                this.setState({
                  pokemonID: dataTwo.data.id
                })

                console.log("seeing the ID state",this.state.pokemonID)
              });
            
          })
        });
  }

    render() {
        return (
            <div className="App">
              
            <h1>Pokédex!</h1>
            
            <h3>{this.state.pokemonID}</h3> 
            {this.state.result.map(function(pokeName) {
              return (
                <h3>{pokeName.name}</h3>
              ) 

              })}
            
            {/* <PokemonCard /> */}
            
            
            </div>
        );
    }
}

export default App;