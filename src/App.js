import React, { Component } from 'react';
import './styles/App.scss';
import PokemonCard from './PokemonCard';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemonInfo: [],
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
      method: 'GET',
      url: `https://pokeapi.co/api/v2/pokemon/?limit=10`,
      dataResponse: 'json',
    })
      .then((fetchNames) => {
        console.log(fetchNames.data.results)

        this.setState({
          result: fetchNames.data.results
        })

        const pokePromise = fetchNames.data.results.map((fetchInfo) => 
          axios({
            method: 'GET',
            url: fetchInfo.url,
            dataResponse: 'json',
          }));
        
        //promise.all basically waits for everything in pokepromise to run so it then executes everything coming after it
          Promise.all(pokePromise).then(pokeData => {
            // console.log(pokeData)
            const pokeInfo = pokeData.map(data => {
              Object.values(data)
              // console.log(Object.values(data))
              return Object.values(data)
            })
                this.setState({
                  pokemonInfo: pokeData
                })
            
            // console.log(this.state.pokemonInfo)
            
          })
        
      })
  }

  render() {
    // console.log(this.state.pokemonInfo);
        return (
            <div className="App">
              
            <h1>Pokédex!</h1>

            <PokemonCard pokeInfoProp={this.state.pokemonInfo} />
            
            </div>
        );
    }
}

export default App;