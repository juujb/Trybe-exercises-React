import React from 'react';
import Pokedex from './Pokedex';
import pokemons from './data';
import './Pokedex.css';

class App extends React.Component {
  render() {
    return (
      <main className='pokedex'>
        < Pokedex pokemons={pokemons} />
      </main>
    )
  }
}

export default App;
