import React, { useContext } from 'react';
import { PokemonContext } from './contextProvider';

const CapturedPokemon = () => {
    const { capturedPokemon, release } = useContext(PokemonContext);

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
};

export default CapturedPokemon;
