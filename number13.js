// Purpose of map(): It is used to create a new array by applying a given function to each element of an existing array. It does not modify
//  the original array and returns a new array with the transformed elements.

// Example:
let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map(function(num) {
  return num * num;
});

console.log(squares); // Outputs: [1, 4, 9, 16, 25]
