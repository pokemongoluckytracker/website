import React, {useState, useEffect} from 'react';
import './App.css';
import Pokemon from './pokemon-released.json';

function App() {
  const pokeArray = Object.values(Pokemon);

  const userPokemon = new Array(pokeArray[pokeArray.length - 1].id + 1).fill().map(() => ({}));

  const userLocalStorage = JSON.parse(localStorage.getItem('userPokemon'));

  if (Array.isArray(userLocalStorage)) {
    userLocalStorage.forEach((entry, index) => userPokemon[index] = entry);
  }

  /**
   * Update the `userPokemon` array with the new state of the changed pokemon
   * @param {Number} id - The ID of the Pokemon.
   * @param {String} type - The update context.
   * @param {Boolean} isChecked - Whether the context is marked as true or false for the Pokemon.
   */
  function updatePokemon(id, type, isChecked) {
    userPokemon[id][type] = isChecked;
    localStorage.setItem('userPokemon', JSON.stringify(userPokemon));
  }


  const pokemonList = pokeArray.map(({id, name}) => {
    
    return (
      <tr key={id}>
        <td>{id}</td>
        <td>{name}</td>
        <td>
          <input 
            type="checkbox"
            onChange={(event) => updatePokemon(id, 'shiny', event.currentTarget.checked)}
          />
        </td>
        <td>
          <input 
            type="checkbox"
            onChange={(event) => updatePokemon(id, 'lucky', event.currentTarget.checked)}
          />
        </td>
        <td>
          <input 
            type="checkbox"
            onChange={(event) => updatePokemon(id, 'purified', event.currentTarget.checked)}
          />
        </td>
      </tr>
    )
  });

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
