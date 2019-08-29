import React, {useState} from 'react';
import './App.css';
import Pokemon from './pokemon-released.json';

function App() {
  const [pokemon, setPokemon] = useState(Pokemon);

  const pokeArray = Object.values(pokemon);

  const pokemonList = pokeArray.map(({id, name}) => {
    return (
      <React.Fragment key={id}>
        <p>{id}</p>
        <p>{name}</p>
      </React.Fragment>
    )
  });
  
  console.log(pokemonList);

  return (
    pokemonList
  );
}

export default App;
