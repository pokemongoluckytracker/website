import React, {useState, useEffect} from 'react';
import './App.css';
import Pokemon from './pokemon-released.json';

function App() {
  const pokeArray = Object.values(Pokemon);
  const checkedShiny = JSON.parse(localStorage.getItem('shinyPokemon'));
  const checkedLucky = JSON.parse(localStorage.getItem('luckyPokemon'));
  const checkedPurified = JSON.parse(localStorage.getItem('purifiedPokemon'));
  let shinyChecked, luckyChecked, purifiedChecked  = false;

  const pokemonList = pokeArray.map(({id, name}) => {
    if(Number(checkedShiny) === Number(id)){
      shinyChecked = true;
    }
    else {
      shinyChecked = false;
    }

    if(Number(checkedLucky) === Number(id)){
      luckyChecked = true;
    }
    else {
      luckyChecked = false;
    }
    
    if(Number(checkedPurified) === Number(id)){
      purifiedChecked = true;
    }
    else {
      purifiedChecked = false;
    }

    return (
      <React.Fragment key={id}>
        <tr>
          <td>{id}</td>
          <td>{name}</td>
          <td>
            <input 
              type="checkbox"
              checked={shinyChecked}
              onChange={() => { checkboxChange('shiny', {id}) }}
            ></input>
          </td>
          <td>
            <input 
              type="checkbox" 
              checked={luckyChecked} 
              onChange={() => { checkboxChange('lucky', {id}) }}
            ></input>
          </td>
          <td>
            <input 
              type="checkbox" 
              checked={purifiedChecked} 
              onChange={() => { checkboxChange('purified', {id}) }}
            ></input>
          </td>
        </tr>
      </React.Fragment>
    )
  });
  
  function checkboxChange(type, id) {
    if(type === 'shiny') {
      let checkedShiny = JSON.parse(localStorage.getItem('shinyPokemon')) || [];
      checkedShiny.push(
        id = id.id
      );

    const checkedShinyList = JSON.stringify(checkedShiny);
    localStorage.setItem('shinyPokemon', checkedShinyList);
    }

    if(type === 'lucky') {
      let checkedLucky = JSON.parse(localStorage.getItem('luckyPokemon')) || [];
      checkedLucky.push(
        id = id.id
      );

    const checkedLuckyList = JSON.stringify(checkedLucky);
    localStorage.setItem('luckyPokemon', checkedLuckyList);
    }

    if(type === 'purified') {
      let checkedPurified = JSON.parse(localStorage.getItem('purifiedPokemon')) || [];
      checkedPurified.push(
        id = id.id
      );

    const checkedPurifiedList = JSON.stringify(checkedPurified);
    localStorage.setItem('purifiedPokemon', checkedPurifiedList);
    }
    
  };

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
