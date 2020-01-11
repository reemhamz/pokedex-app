import React, { Component } from 'react';


class PokemonCardTest extends Component {
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
            }
        }
    }

    

    render() {
        const type = this.state.typeColorObject;
        const getData = this.props.infoProp
        // console.log(this.props.infoProp)

        const typesObject = getData.data.types;
        const typesArray = Object.values(typesObject);

        const showType = typesArray.map(getType => {
            // console.log(getType.type.name)
            return getType.type.name
        })

        return (
            <div className="pokeCard">

                <div className="cardInfo">

                    <div className="cardHeader">

                    <div className="pokeID">
                            <h3>{`#${getData.data.id}`}</h3>
                        </div>
                        
                    <div className="pokeName">
                        <h3>{getData.data.name}</h3>
                        </div>
                    </div>
                    
                    <div className="cardImg">
                            <img className="pokeImg" src={require(`./assets/images/${getData.data.id}.jpg`)} alt=""/>
                    </div>
                    
                    {
                        showType.map(showMeTypes => {
                            // console.log(showMeTypes);

                            const typesColor = () => {
                                if (showMeTypes === "grass") {
                                    return type.grass
                                } else if (showMeTypes === "fire") {
                                    return type.fire
                                } else if (showMeTypes === "water") {
                                    return type.water
                                } else if (showMeTypes === "normal") {
                                    return type.normal
                                } else if (showMeTypes === "electric") {
                                    return type.electric
                                } else if (showMeTypes === "ice") {
                                    return type.ice
                                } else if (showMeTypes === "fighting") {
                                    return type.fighting
                                } else if (showMeTypes === "poison") {
                                    return type.poison
                                } else if (showMeTypes === "ground") {
                                    return type.ground
                                } else if (showMeTypes === "flying") {
                                    return type.flying
                                } else if (showMeTypes === "psychic") {
                                    return type.psychic
                                } else if (showMeTypes === "bug") {
                                    return type.bug
                                } else if (showMeTypes === "rock") {
                                    return type.rock
                                } else if (showMeTypes === "ghost") {
                                    return type.ghost
                                } else if (showMeTypes === "dragon") {
                                    return type.dragon
                                } else if (showMeTypes === "dark") {
                                    return type.dark
                                } else if (showMeTypes === "steel") {
                                    return type.steel
                                } else if (showMeTypes === "fairy") {
                                    return type.fairy
                                }
                            }

                            const typeFont = () => {
                                if (showMeTypes === "electric" || showMeTypes === "ground" || showMeTypes === "bug" || showMeTypes === "rock" || showMeTypes === "dark" || showMeTypes === "grass" || showMeTypes === "steel" || showMeTypes === "fairy" ||
                                    showMeTypes === "flying") {
                                    return "black"
                                }
                            }


                            return (
                                <span className="pokeType" style={{ background: typesColor(), color: typeFont()}}>
                                    {showMeTypes}
                                </span>

                            )
                        })
                    }

                </div>
            </div>
        )
            
    }
}

export default PokemonCardTest