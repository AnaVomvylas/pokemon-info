import React, { useContext, useEffect } from 'react';
import { PokemonContext } from './contextProvider'

// eslint-disable-next-line no-extend-native
String.prototype.capitalizeFirst = function(){
    return this.charAt(0).toUpperCase() + this.slice(1);
};

const url = "https://pokeapi.co/api/v2/pokemon";

const PokemonList = () => {
    const { availablePokemon, capture, addPokemons } = useContext(PokemonContext);

    useEffect(() => {
        const fetchPokemon = async (url) => {
            const response = await fetch(url);
            const data = await response.json();
            addPokemons(data.results);
        };
        fetchPokemon(url);
    }, []);


    console.log(availablePokemon)
    return (
        <div >
            <h2>Available Pokemon</h2>
            {availablePokemon.map((pokemon) => {
                return <div key={`${pokemon.name}`}>
                    <div>
                        <span>{pokemon.name.capitalizeFirst()}</span>
                        <button onClick={() => capture(pokemon)}>+</button>
                    </div>
                </div>;
            })}
        </div>
    );
};

export default PokemonList;