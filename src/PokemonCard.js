import React, { Component } from 'react';


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
            }
        }
    }

    

    render() {
        const type = this.state.typeColorObject;
        return (
            <div className="pokemonCard">
                <div className="cardElements wrapper">
            
                {this.props.pokeInfoProp.map(getInfo => {
                    // console.log(getInfo)

                    const typesObject = getInfo.data.types;
                    const typesArray = Object.values(typesObject);

                    // console.log(typesArray)

                    const showType = typesArray.map(getType => {
                        // console.log(getType.type.name)
                        return getType.type.name
                    })
            
                    const pokemonName = getInfo.data.name;
                    const pokemonID = getInfo.data.id;

                    return (
                        <>
                            <div className="pokeID">
                                <h3>{getInfo.data.id}</h3>
                            </div>

                            <div className="imgBox">
                            <img className="pokeImg" src={require(`./assets/pokemonImages/${getInfo.data.id}.jpg`)} alt=""/>
                            </div>

                            <div className="pokeName">
                            <h3>{(getInfo.data.name)}</h3>
                            </div>

                            {/* {console.log('hellooooo', (showType).join(" "))} */}
                            {showType.map(showMeTypes => {
                                console.log(showMeTypes);

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
                                    <div className="pokeType" style={{ background: typesColor(), color: typeFont()}}>
                                        <p>{showMeTypes}</p>
                                    </div>
                                )
                            })}
                    
                        </>
                    )
                })
                    }
                    </div>
                </div>
        )
            
    }
}

export default PokemonCard