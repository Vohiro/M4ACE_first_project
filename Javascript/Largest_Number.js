function findLargestNumber(arr) {
    if (arr.length === 0) return null; // Handle empty array case
    return Math.max(...arr);
}
