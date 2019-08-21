const fs = require("fs");
const fetch = require("node-fetch");

async function getData() {
  await fetch("https://pokemon-go1.p.rapidapi.com/released_pokemon.json", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "pokemon-go1.p.rapidapi.com",
      "x-rapidapi-key": "bfc76afe43mshba4efe32e3298b5p1c9167jsn876ac0e50f92"
    }
  })
  .then(response => {
    return response.json();
  })
  .then(response => {
    fs.writeFile("src/pokemon-released.json", JSON.stringify(response), (err) => {
      if (err) console.log(err);
      console.log("Successfully written to names File.");
    });
  })
  .catch(err => {
    console.log(err);
  });
}

getData();

// async function read() {
//   const cachedDataString = await new Promise((resolve, reject) => {
//     fs.readFile("src/pokemon-names.json", (error, data) => {
//       if (error) {
//         console.error(`Failed to read cached file due to error: ${error}.`);
//         reject();
//         return;
//       }

//       resolve(data);
//     });
//   });

//   const obj = JSON.parse(cachedDataString);

//   console.log(obj);
// }

// read();
