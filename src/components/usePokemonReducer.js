import { useReducer } from 'react';
import { CAPTURE, RELEASE, ADD } from './actions';

const defaultState = {
    availablePokemon: [
        { id: 1, name: 'Bulbasaur' },
        { id: 2, name: 'Charmander' },
        { id: 3, name: 'Squirtle' }],
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

const pokemonReducer = (state, action) => {
    switch (action.type) {
        case CAPTURE:
            return capture(state, action.pokemon);
        case RELEASE:
            return release(state, action.pokemon);
        case ADD:
            return addPokemon(state, action.pokemon);
        default:
            return state;
    }
};

const usePokemonReducer = () => {
    return useReducer(pokemonReducer, defaultState);
};

export default usePokemonReducer;