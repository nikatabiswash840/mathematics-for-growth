// Generate a random number between 1 and 100
const rand = Math.floor(Math.random() * 100) + 1;

// Use the random number to determine the output
if (rand < 25) {
  console.log('The output is true');
} else {
  console.log('The output is false');
}
