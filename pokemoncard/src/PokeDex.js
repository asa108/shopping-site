import React, { Component } from "react";
import "./PokeDex.css";
import Pokecard from "./Pokecard";

export class PokeDex extends Component {
  state = {
    pokemons: [
      { id: 4, name: "pokachu", type: "sdfd", exp: 22 },
      { id: 55, name: "adsfg", type: "df", exp: 76 },
      { id: 12, name: "hgfd", type: "sd", exp: 22342 },
      { id: 765, name: "erw", type: "fire", exp: 2232 },
      { id: 42, name: "345y", type: "fire", exp: 22 },
    ],
  };
  render() {
    return (
      <div className="Pokedex">
        <h1>Pokedex!</h1>
        <div className="Pokedex-cards">
          {this.state.pokemons.map((pokemon) => (
            <Pokecard pokemon={pokemon} />
          ))}
        </div>
      </div>
    );
  }
}

export default PokeDex;
