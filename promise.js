const myFirstPromise = new Promise((resolve, reject) => {
  fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then((response) => {
      if (!response.ok) {
        throw Error("Response is not available");
      }
      return response.json();
    })
    .then((data) => {
      const value = data.weight;
      console.log("value: ", value);
      if (value == 40) {
        resolve("SUCCESS");
      } else {
        reject("FAILURE");
      }
    })
    .catch((error) => {
      reject(error.message);
    });
});
