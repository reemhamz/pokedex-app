import React, { Component } from 'react';
import axios from 'axios'

class PokemonCard extends Component {
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
                    url: `https://pokeapi.co/api/v2/pokemon/?limit=9`,
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

                    Promise.all(pokePromise).then(pokeData => {
                        console.log(pokeData)
                        const pokeInfo = pokeData.map(data => {
                            Object.values(data)
                        })
                        this.setState({
                            pokemonInfo: pokeData
                        })

                        console.log(this.state.pokemonInfo)
                    })

                })
        }


    render() {
        return (
            <div className="PokemonCard">
                    
            </div>
        );
    }
}

export default PokemonCard