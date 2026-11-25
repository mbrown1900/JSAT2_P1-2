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