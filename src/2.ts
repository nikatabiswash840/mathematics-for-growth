const getRandomNumber = (max: number) => Math.floor(Math.random() * max);
const numbers = new Array(10).fill(0).map(() => getRandomNumber(10));
console.log(numbers);
