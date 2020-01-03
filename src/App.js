import React, { Component } from 'react';
import './App.css';
import PokemonCard from './PokemonCard';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemonInfo:[],
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
        url: `https://pokeapi.co/api/v2/pokemon/?limit=2`,
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
                // console.log(dataTwo)

                // console.log(Object.values(dataTwo))
                const dataTwoArray = Object.values(dataTwo)
                console.log(dataTwoArray)

                this.setState({
                  pokemonInfo: [dataTwoArray]
                })

                // console.log(this.state.pokemonInfo)
                // this.state.pokemonInfo.map((getInfo) => {
                //   console.log(getInfo[0].id)

                //   this.setState({
                //     pokemonID: getInfo[0].id
                //   })
                // })
              });
          })
        });
  }

    render() {
        return (
            <div className="App">
              
            <h1>Pokédex!</h1>

            {this.state.pokemonInfo.map((getInfo) => {
              // console.log(getInfo[0].id)
              return (
                <>
                  <h3>{getInfo[0].id}</h3>

                  <h3>{getInfo[0].name}</h3>

                </>
              )
            })}
            
            
            {/* {this.state.result.map((pokeName)  =>{
              return (
                <>
                <h3>{this.state.pokemonID}</h3>
                <h3>{pokeName.name}</h3>
                  </>
                )
              })} */}
              
            
            {/* <PokemonCard /> */}
            
            
            </div>
        );
    }
}

export default App;