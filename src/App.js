import React, { Component } from 'react';
import './App.css';
// import PokemonCard from './PokemonCard';
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
      url: `https://pokeapi.co/api/v2/pokemon/?limit=3`,
      dataResponse: 'json',
    })
      .then((fetchNames) => {
        // console.log(fetchNames.data.results)

        this.setState({
          result: fetchNames.data.results
        })

        const pokePromise = fetchNames.data.results.map((fetchInfo) => 
          axios({
            method: 'GET',
            url: fetchInfo.url,
            dataResponse: 'json',
          }));
        
          Promise.all(pokePromise).then(pokeData => {
            // console.log(pokeData)
            const pokeInfo = pokeData.map(data => {
              Object.values(data)
            })
                this.setState({
                  pokemonInfo: pokeData
                })
            
            // console.log(this.state.pokemonInfo)
          })
        
      })
  }

    render() {
        return (
            <div className="App">
              
            <h1>Pokédex!</h1>

            {this.state.pokemonInfo.map(getInfo => {
              
              console.log(getInfo.data.types)
              const typesObject = getInfo.data.types;

              const typesArray = Object.values(typesObject)

              console.log(typesArray)
              const showType = typesArray.map(getType => {
                console.log(getType.type.name)
                return getType.type.name
                })
                
                return (
                  <>
                    {console.log(showType)}
                    <h3>{showType.map(showMeTypes => {
                      console.log(showMeTypes)
                      return (
                        <>
                          {showMeTypes}
                          </>
                      )
                    })}</h3>
                  <h3>{getInfo.data.id}</h3>
                  
                  <h3>{getInfo.data.name}</h3>
                </>
              )
            })}
            {/* <PokemonCard /> */}
            </div>
        );
    }
}

export default App;