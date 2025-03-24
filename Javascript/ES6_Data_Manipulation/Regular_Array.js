function toTypedArray(arr) {
  return new Uint8Array(arr);
}

function toRegularArray(typedArr) {
  return Array.from(typedArr);
}

// Example usage:
const regularArr = [10, 20, 30, 40, 50];
const typedArr = toTypedArray(regularArr);
console.log("TypedArray:", typedArr);

const backToRegular = toRegularArray(typedArr);
console.log("Regular Array:", backToRegular);

