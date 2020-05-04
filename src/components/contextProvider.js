import React, { createContext, useState } from 'react';

export const PokemonContext = createContext();

export const ContextProvider = props => {
    const [availablePokemon, setPokemon] = useState([
        { id: 1, name: 'Bulbasaur' },
        { id: 2, name: 'Charmander' },
        { id: 3, name: 'Squirtle' }]);

    const [capturedPokemon, setCapturedPokemon] = useState([]);

    const providerValue = {
        availablePokemon,
        setPokemon,
        capturedPokemon,
        setCapturedPokemon
    };

    return (
        <PokemonContext.Provider value={providerValue}>
            {props.children}
        </PokemonContext.Provider>
    )
};