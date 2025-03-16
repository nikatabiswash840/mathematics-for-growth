import { randomNumber } from 'math-random';

function getRandomCode() {
  const code = randomNumber(1000000, 9999999);
  return `const ${code}`;
}
