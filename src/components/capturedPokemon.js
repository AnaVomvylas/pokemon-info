import React, { useContext } from 'react';
import { PokemonContext } from './contextProvider';

export default function CapturedPokemon() {
    const { availablePokemon,
        setPokemon,
        capturedPokemon,
        setCapturedPokemon
    } = useContext(PokemonContext);

    const removePokemonFromList = pokemon => {
        return capturedPokemon.filter(x => x !== pokemon);
    };

    const release = pokemon => {
        setPokemon([...availablePokemon, pokemon]);
        setCapturedPokemon(removePokemonFromList(pokemon));
    };

    return (
        <div className="pokedex">
            <h2>Captured Pokemon</h2>
            {capturedPokemon.map(pokemon =>
                <div key={`${pokemon.id}`}>
                    <div>
                        <span>{pokemon.name}</span>
                        <button onClick={() => release(pokemon)}>-</button>
                    </div>
                </div>
            )}
        </div >
    )
}
