import React from 'react';
import './App.css';
import { ContextProvider } from './components/contextProvider';
import PokemonList from './components/pokemonList'
import CapturedPokemon from './components/capturedPokemon';
import PokemonForm from './components/PokemonForm';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ContextProvider>
          <div>
            <PokemonList />
            <CapturedPokemon />
          </div>
          <PokemonForm />
        </ContextProvider>
      </header>
    </div>
  );
}

export default App;
