import React, { useContext, useState } from 'react';
import { PokemonContext } from './contextProvider';

const PokemonForm = () => {
    const { availablePokemon, capturedPokemon, addPokemon } = useContext(PokemonContext);
    const [pokemonName, setPokemonName] = useState();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        addPokemon({ id: getNextID(), name: pokemonName });
    }

    const getNextID = () => Math.max.apply(null, [...availablePokemon, ...capturedPokemon].map(x => x.id)) + 1;

    const handleNameOnChange = (e) => setPokemonName(e.target.value);

    return (
        <form onSubmit={handleFormSubmit}>
            <h2>Add a new Pokemon</h2>
            <div>
                <input type="text" placeholder="Pokemon name" onChange={handleNameOnChange} />
                <input type="submit" value="Add" />
            </div>
        </form>
    )
};

export default PokemonForm;
