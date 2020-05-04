import React from 'react';
import './App.css';
import PokemonList from './components/pokemonList'
import CapturedPokemon from './components/capturedPokemon';
import { ContextProvider } from './components/contextProvider';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ContextProvider>
          <PokemonList />
          <CapturedPokemon />
        </ContextProvider>
      </header>
    </div>
  );
}

export default App;
