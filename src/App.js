import React, { Component } from 'react';
import './styles/App.scss';

import PokemonCard from './PokemonCard';
import Preloader from './Preloader';
import Nav from './Nav';
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
      loading: false,
      pokeCall: "",
      regionFunction: "",
    }
    // const navCallback = this.navCallback.bind(this)
  }

  componentDidMount() {

  const navCallback = (navData) => {

    const region = () => {
      if (navData === "kanto") {
        return "?limit=151"
      } else if (navData === "johto") {
        return "?offset=151&limit=100"
      } else if (navData === "hoenn") {
        return "?offset=251&limit=130"
      } else if (navData === "sinnoh") {
        return "?offset=386&limit=107"
      }
    }
    
    // console.log(region())
    console.log(navData)
    console.log('this is the region call', region())
    console.log('the region call but in state',this.state.pokeCall)
    // return region()
    

      axios({
      method: 'GET',
      url: `https://pokeapi.co/api/v2/pokemon/${region()}`,
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
          }
          ));
        this.setState({
          loading: true
        })
          
        
        //promise.all basically waits for everything in pokepromise to run so it then executes everything coming after it
          Promise.all(pokePromise).then(pokeData => {
            
            const pokeInfo = pokeData.map(data => {
              Object.values(data)
              
              return Object.values(data)
            })

            const updateLoad = () => {
            return this.setState({
                loading: false
            })
            }

            setTimeout(updateLoad(), 1000);

                this.setState({
                  pokemonInfo: pokeData,
                })
          })
        
      })





  }

    this.setState({
      regionFunction: navCallback
    })

    
  }


  render() {
        return (
          
            <div className="App">
              
            <h1>Poké Polaroid!</h1>
            

            {this.state.loading === true ?
              (
                <div className="loader">
                  <Preloader />
                </div>
              ) :
              
              this.state.pokemonInfo ? (
                <>
                  <Nav getRegionProp={this.state.regionFunction}/>
                  

                <div className="cardBody wrapper">
                {this.state.pokemonInfo.map(getInfo => {
                  // console.log(getInfo)
                  return (
                    
                    
                      <PokemonCard
                        key={getInfo.data.id}
                        infoProp={getInfo}
                      
                      />
                    
                    )
                  
                })}
                  </div>
                  </>
            ) : (
                <h1>loading</h1>
            )
          }
            
            </div>
        );
    }
}

export default App;