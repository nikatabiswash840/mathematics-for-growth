export const add = (a: number, b: number): number => {
  return a + b;
};

export const subtract = (a: number, b: number): number => {
  return a - b;
};

export const multiply = (a: number, b: number): number => {
  return a * b;
};

export const divide = (a: number, b: number): number => {
  if(b === 0) throw "Cannot divide by zero";
  return a / b;
};

// Test the functions with these examples:
console.log(add(3, 4)); // Output: 7
console.log(subtract(5, 3)); // Output: 2
console.log(multiply(6, 2)); // Output: 12
console.log(divide(10, 2)); // Output: 5
