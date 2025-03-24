function processNumbers(arr) {
  const evenNumbers = arr.filter(num => num % 2 === 0);
  const sum = arr.reduce((acc, num) => acc + num, 0);
  
  return { evenNumbers, sum };
}

// Example usage:
const numbers = [1, 2, 3, 4, 5, 6];
console.log(processNumbers(numbers));
// Output: { evenNumbers: [2, 4, 6], sum: 21 }

