// Math.random() returns a pseudo-random number between 0 and 1
function randomNumber(max: number): number {
  // Convert max to a float
  const maxFloat = Number(max);
  // Return the pseudo-random number multiplied by max
  return Math.random() * maxFloat;
}
