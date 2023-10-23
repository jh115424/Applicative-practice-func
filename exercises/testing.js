function getAllAverageTemperatures(data) {
  // Your code goes here...

  return data.planets.map((planet) => planet.aveTemp);
}

console.log(getAllAverageTemperatures);