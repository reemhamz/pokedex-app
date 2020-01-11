import React, { Component } from 'react';
import './styles/App.scss';
// import PokemonCard from './PokemonCard';
import PokemonCardTest from './PokemonCardTest';
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
      regionSelected: "kanto",
      pokeCall: ""
    }
  }

  navCallback = (navData) => {

    this.setState({
      regionSelected: navData
    })

    const test = () => {
        if (this.state.regionSelected === "kanto") {
          return "?limit=151"
        } else if (this.state.regionSelected === "johto") {
          return "?offset=151&limit=100"
        } else if (this.state.regionSelected === "hoenn") {
          return "?offset=256&limit=10"
        }
    }
    
    this.setState({
      pokeCall: test
    })

    console.log(test())

    return test()
    
  }

  
  componentDidMount() {
    
    axios({
      method: 'GET',
      url: `https://pokeapi.co/api/v2/pokemon/?limit=151`,
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

            setTimeout(updateLoad(), 4000);

                this.setState({
                  pokemonInfo: pokeData,
                })
          })
        
      })
  }

  

  render() {
    // console.log(this.state.pokemonInfo);
        return (
            <div className="App">
              
            <h1>Poké Polaroid!</h1>
            {/* <PokemonCard pokeInfoProp={this.state.pokemonInfo} /> */}

            {this.state.loading === true ?
              (
                <div className="loader">
                  <Preloader />
                </div>
              ) :
              
              this.state.pokemonInfo ? (
                <>
                  <Nav getRegionProp={this.navCallback}/>
                  

                <div className="cardBody wrapper">
                {this.state.pokemonInfo.map(getInfo => {
                  // console.log(getInfo)
                  return (
                    
                    
                      <PokemonCardTest
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