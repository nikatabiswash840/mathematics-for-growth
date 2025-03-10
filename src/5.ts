const math = require('mathjs');

// Generate a random number between 1 and 10
const randNum = math.randomInt(1, 10);

// Generate a random equation using the random number
const eq = `$$\\frac{${randNum}}{2} + \\frac{3}{4}$$`;

console.log(eq);
