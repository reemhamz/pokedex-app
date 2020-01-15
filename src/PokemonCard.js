import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';
import axios from 'axios';


class PokemonCard extends Component {
    constructor() {
        super();
        this.state = {
            testing: "",
            typeColorObject: {
                normal:"#A8A77A",
                fire: "#EE8130",
                water: "#6390F0",
                electric: "#F7D02C",
                grass: "#7AC74C",
                ice: "#96D9D6",
                fighting: "#C22E28",
                poison: "#A33EA1",
                ground: "#E2BF65",
                flying: "#A98FF3",
                psychic: "#F95587",
                bug: "#A6B91A",
                rock: "#B6A136",
                ghost: "#735797",
                dragon: "#6F35FC",
                dark: "#705746",
                steel: "#B7B7CE",
                fairy: "#D685AD"
            },
            isFlipped: false,
            pokeDesc: ""
        }
        this.frontClick = this.frontClick.bind(this)
        this.backClick = this.backClick.bind(this)
    }
    
    componentDidMount() {
        axios({
            method: 'GET',
            url: `https://pokeapi.co/api/v2/pokemon-species/${this.props.infoProp.data.id}`,
            dataResponse: 'json',
        })
            .then((species) => {
                // console.log(species)

                // species.data.flavor_text_entries.map(desc => {
                //     // console.log(desc)
                //     if (desc.language.name === "en") {
                //         console.log(Object.values(desc))
                //     }
                // })

                const description = species.data.flavor_text_entries.filter(desc => desc.language.name === "en")
                const descs = description[Math.floor(Math.random()*description.length)]
                console.log(descs.flavor_text)

                this.setState({
                    pokeDesc: descs.flavor_text
                })
            }
            
        );
    }
    
    frontClick = (e) => {
        e.preventDefault();
        this.setState({
            isFlipped: true
        })
        console.log(this.state.isFlipped)
    }

    backClick = (e) => {
        e.preventDefault();
        this.setState({
            isFlipped: false
        })

        console.log(this.state.isFlipped)
    }

    

    render() {
        const type = this.state.typeColorObject;
        const getData = this.props.infoProp
        const typesObject = getData.data.types;
        const typesArray = Object.values(typesObject);
        const showType = typesArray.map(getType => {
            return getType.type.name
        })

        return (
            <div className="PokemonCard">

                <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">

                <div className="cardInfo cardFront cardFace">

                    <div className="cardHeader frontHeader">
                    <div className="pokeID">
                            <h3>{`#${getData.data.id}`}</h3>
                        </div>
                        
                    <div className="pokeName">
                        <h3>{getData.data.name}</h3>
                        </div>
                    </div>
                    
                    <div className="cardImg">
                            <img className="pokeImg" src={require(`./assets/svgPoke/${getData.data.id}.svg`)} alt={`${getData.data.name} posing in a field on a sunno day`}/>
                    </div>
                    
                    {
                        showType.map(showMeTypes => {
                            // console.log(showMeTypes);

                            

                            return (
                                <span className="pokeType">
                                    < img src={require(`./assets/types/${showMeTypes}.svg`)
                                    } alt={`${getData.data.name}'s type is ${showMeTypes}`} / >
                                    
                                </span>

                            )
                        })
                    }
                        <div className="buttonBox">
                            
                    <button className="button" tabIndex="0" onClick={this.frontClick}>Flip to Bio</button>
                    </div>

                </div>

                <div className="cardInfo cardBack cardFace">
                        
                        <div className="cardHeader cardBackHeader">

                        <h3>
                            About {getData.data.name}
                        </h3>
                        </div>

                        <div className="cardBackBody">
                        <p>
                    {this.state.pokeDesc}
                        </p>

                        </div>
                        <div className="buttonBox">
                    <button tabIndex="0" className="button" onClick={this.backClick}>Flip to Overview</button>
                        </div>
                </div>
                </ReactCardFlip>
            </div>
        )
        
    }
}

export default PokemonCard;