import React, { useContext } from 'react';
import { PokemonContext } from './contextProvider'

const PokemonList = () => {
    const { availablePokemon, capture } = useContext(PokemonContext);

    return (
        <div >
            <h2>Available Pokemon</h2>
            {availablePokemon.map((pokemon) => {
                return <div key={`${pokemon.id}`}>
                    <div>
                        <span>{pokemon.name}</span>
                        <button onClick={() => capture(pokemon)}>+</button>
                    </div>
                </div>;
            })}
        </div>
    );
};

export default PokemonList;