import { useReducer } from 'react';
import { CAPTURE, RELEASE, ADD, ADDVIAAPI } from './actions';

const defaultState = {
    availablePokemon: [],
    capturedPokemon: []
};

const capture = (state, pokemon) => ({
    availablePokemon: state.availablePokemon.filter(x => x !== pokemon),
    capturedPokemon: [...state.capturedPokemon, pokemon]
});

const release = (state, pokemon) => ({
    capturedPokemon: state.capturedPokemon.filter(x => x !== pokemon),
    availablePokemon: [...state.availablePokemon, pokemon]
});

const addPokemon = (state, pokemon) => ({
    availablePokemon: [...state.availablePokemon, pokemon],
    capturedPokemon: state.capturedPokemon
});

const updatePokemonList = (state, pokemons) => ({
    ...state,
    availablePokemon: pokemons
});

const pokemonReducer = (state, action) => {
    switch (action.type) {
        case CAPTURE:
            return capture(state, action.pokemon);
        case RELEASE:
            return release(state, action.pokemon);
        case ADD:
            return addPokemon(state, action.pokemon);
        case ADDVIAAPI:
            return updatePokemonList(state, action.pokemons);
        default:
            return state;
    }
};

const usePokemonReducer = () => {
    return useReducer(pokemonReducer, defaultState);
};

export default usePokemonReducer;