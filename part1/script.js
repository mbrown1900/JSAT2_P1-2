// JSAT2 Part B1: Arrays and searching
// Author: Mathew Brown

// B1.2: Build the array

// numbers: the list of numbers
let numbers = [11, 5, 8, 3, 25, 16, 31, 45, 14, 20];
console.log("B1.2 Array:", numbers);

// B1.3: Sort the array

// sort from smallest to largest
// (a - b) is needed so they sort as numbers
numbers.sort(function (a, b) {
  return a - b;
});
console.log("B1.3 Sorted:", numbers);