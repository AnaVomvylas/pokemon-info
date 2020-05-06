import React, { createContext } from 'react';
import usePokemonReducer from './usePokemonReducer';
import { CAPTURE, RELEASE } from './actions';

export const PokemonContext = createContext();

export const ContextProvider = props => {

    const [state, dispatch] = usePokemonReducer();
    const {availablePokemon, capturedPokemon} = state;

    const capture = (pokemon) => dispatch({ type: CAPTURE, pokemon });
    const release = (pokemon) => dispatch({ type: RELEASE, pokemon });

    const providerValue = {
        availablePokemon,
        capturedPokemon,
        capture,
        release
    };

    return (
        <PokemonContext.Provider value={providerValue}>
            {props.children}
        </PokemonContext.Provider>
    );
};