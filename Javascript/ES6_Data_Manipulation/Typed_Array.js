// Create a Uint8Array with a length of 5
const typedArray = new Uint8Array([10, 20, 30, 40, 50]);

console.log("Original TypedArray:", typedArray);

// Reverse the TypedArray and display result
const reversedArray = typedArray.slice().reverse(); // slice() to prevent mutation
console.log("Reversed TypedArray:", reversedArray);

