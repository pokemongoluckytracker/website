import React from 'react';
import './App.css';

function App() {
  const request = require("request");

  const options = {
    method: 'GET',
    url: 'https://pokemon-go1.p.rapidapi.com/pokemon_names.json',
    headers: {
      'x-rapidapi-host': 'pokemon-go1.p.rapidapi.com',
      'x-rapidapi-key': 'bfc76afe43mshba4efe32e3298b5p1c9167jsn876ac0e50f92'
    }
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
  });

  return (
    <div>BELLOW</div>
  )
}

export default App;
