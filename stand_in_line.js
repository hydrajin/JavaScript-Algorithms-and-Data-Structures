function nextInLine(arr, item) {
  // Only change code below this line
  // Add the number (item) to the end of the array
  arr.push(item);
  // remove the first element of the array and return its value
  return arr.shift();
  // Only change code above this line
}

// Setup
const testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));