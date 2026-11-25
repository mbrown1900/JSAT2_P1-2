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

// B1.4: Insert 19, 23 and 30

// add the new numbers to the end of the array
numbers.push(19);
numbers.push(23);
numbers.push(30);

// sort again so the array stays in order
numbers.sort(function (a, b) {
  return a - b;
});
console.log("B1.4 After insert:", numbers);

// B1.5: Remove 8 and 31 

// position - where the number is in the array
let position = numbers.indexOf(8);
numbers.splice(position, 1);

position = numbers.indexOf(31);
numbers.splice(position, 1);
console.log("B1.5 After remove:", numbers);

// B1.6: Sequential search

// sequentialsearch - checks each item one by one
// array - the list to search
// value - the number to find
function sequentialSearch(array, value) {
  // i - the position we are checking
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}

console.log("B1.6 Search for 25:", sequentialSearch(numbers, 25));
console.log("B1.6 Search for 99:", sequentialSearch(numbers, 99));

// B1.7: Binary Search

// binarySearch - cuts search area in half
// array - the sorted list to search
// value - the number to find
// returns the position of the number, or -1 if it is not found
function binarySearch(array, value) {
  // low - the start of the part we are still searching
  let low = 0;
  // high - the end of the part we are still searching
  let high = array.length - 1;

  while (low <= high) {
    // middle - the position halfway between low and high
    let middle = Math.floor((low + high) / 2);

    if (array[middle] === value) {
      return middle;
    } else if (array[middle] < value) {
      low = middle + 1;
    } else {
      high = middle - 1;
    }
  }
  return -1;
}

console.log("B1.7 Search for 25:", binarySearch(numbers, 25));
console.log("B1.7 Search for 99:", binarySearch(numbers, 99));

//Tests for squential search

console.log("Test1-sS",sequentialSearch(numbers, 3));
console.log("Test2-sS",sequentialSearch(numbers, 45));
console.log("Test3-sS",sequentialSearch(numbers, 19));
console.log("Test4-sS",sequentialSearch(numbers, 25));
console.log("Test5-sS",sequentialSearch(numbers, 99));
console.log("Test6-sS",sequentialSearch(numbers, 8));
console.log("Test7-sS",sequentialSearch([], 5));

//Tests for binary search
console.log("Test1-SS",binarySearch(numbers, 3));
console.log("Test2-SS",binarySearch(numbers, 45));
console.log("Test3-SS",binarySearch(numbers, 19));
console.log("Test4-SS",binarySearch(numbers, 25));
console.log("Test5-SS",binarySearch(numbers, 99));
console.log("Test6-SS",binarySearch(numbers, 8));
console.log("Test7-SS",binarySearch([], 5));