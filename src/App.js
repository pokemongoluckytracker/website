import React, {useState} from 'react';
import './App.css';
import Pokemon from './pokemon-released.json';

function App() {
  const [pokemon, setPokemon] = useState(Pokemon);

  const pokeArray = Object.values(pokemon);

  const pokemonList = pokeArray.map(({id, name}) => {
    return (
      <React.Fragment key={id}>
        <tr>
          <td>{id}</td>
          <td>{name}</td>
          <td><input type="checkbox"></input></td>
          <td><input type="checkbox"></input></td>
          <td><input type="checkbox"></input></td>
        </tr>
      </React.Fragment>
    )
  });
  
  console.log(pokemonList);

  return (
    <React.Fragment>
      <table className="pokesLabTable">
        <thead>
          <tr>
            <th>Number</th>
            <th>Name</th>
            <th>Shiny</th>
            <th>Lucky</th>
            <th>Purified</th>
          </tr>
        </thead>
        <tbody>
          {pokemonList}
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default App;
