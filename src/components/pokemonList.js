import React, { useContext } from 'react';
import { PokemonContext } from './contextProvider'

export default function PokemonList() {
    const {
        availablePokemon,
        setPokemon,
        capturedPokemon,
        setCapturedPokemon
    } = useContext(PokemonContext);

    const removePokemonFromList = pokemon => {
        availablePokemon.filter(x => x !== pokemon);
    };

    const capture = pokemon => () => {
        setCapturedPokemon([...capturedPokemon, pokemon])
        setPokemon(removePokemonFromList(pokemon));
    };

    return (
        <div >
            {availablePokemon.map((pokemon) =>
                {
                    return <div key={`${pokemon.id}`}>
                        <div>
                            <span>{pokemon.name}</span>
                            <button onClick={capture(pokemon)}>+</button>
                        </div>
                    </div>;
                })}
        </div>
    );
}