import React, { Component } from 'react';
import './styles/App.scss';

// import Welcome from './Welcome';
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

            <a href="#mainContent" className="skipLink">Skip to main content.</a>

            
          <header className="Welcome" role="banner">
                <div className="welcomeInfo wapper" id="mainContent">
                    <h1>PokéPolaroid</h1>
                    <p>
                        Select a Pokémon region and get polaroid photos showing all the selected region's unique Pokémon with cheeky smiles! Each polaroid also contains information about the Pokémon.
                    </p>
                    <div tabIndex="0" className="buttonBox">
                    <Nav  getRegionProp={this.state.regionFunction}/>
                </div>
              </div>
              </header>
              
            {/* <h1>Poké Polaroid!</h1> */}
            

            {this.state.loading === true ?
              (
                <div className="loader">
                  <Preloader />
                </div>
              ) :
              
              this.state.pokemonInfo ? (
                <>

                <main className="cardBody wrapper" role="main">
                {this.state.pokemonInfo.map(getInfo => {
                  // console.log(getInfo)
                  return (
                    
                    
                      <PokemonCard
                        key={getInfo.data.id}
                        infoProp={getInfo}
                      />
                    
                    )
                  
                })}
                    </main>
                    
                </>
                
            ) : (
                <h1>loading</h1>
                )
              
            }
            <footer role="contentinfo">
              <p>
                © Designed and coded by <a href="https://reemh.dev" target="_blank" rel="noopener noreferrer">Reem H</a> 2020 <span role="img" aria-hidden="true">📸
                </span> 
              </p>
            </footer>
            
            </div>
        );
    }
}

export default App;