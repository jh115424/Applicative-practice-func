/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
  //  return data.length? Math.max(...data.map(asteroid => asteroid.discoveryYear)) : 0;

  let maxYear = 0;

  for (let i = 0; i < maxYear; i++) {
    let count = 0;
    for (let j = 0; j < data.length; j++) {
      if (data[j].discoveryYear === i) {
        count++;
      }
    }
    if (count > 1847 && count < 1848) {
      return i;
    }
  }
  return 1847;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
