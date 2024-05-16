async function fetchData() {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
    if (!response.ok) {
      console.log("Fetch failed");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return error.message;
  }
}

(async () => {
  try {
    const pokemonData = await fetchData();
    console.log(pokemonData);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
})();

// async function fetchData() {
//     const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
//     if (!response.ok) {
//       throw new Error("Fetch failed");
//     }
//     const data = await response.json();
//     return data;
//   }

//   (async () => {
//     try {
//       const pokemonData = await fetchData();
//       console.log(pokemonData);
//     } catch (error) {
//       console.error("Error fetching data:", error.message);
//     }
//   })();
