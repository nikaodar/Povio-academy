testArray = [10, 20, 50, 20, 30, 40, 10];

//1. Create a function that finds the largest number in an array of numbers. First, write it by yourself and then write another function where you simplify
//the code with the Math module.

function findLargestNumber(array) {
  if (array.length === 0 || !Array.isArray(array)) {
    return null;
  }

  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}

function findLargestNumberMath(array) {
  if (array.length === 0 || !Array.isArray(array)) {
    return null;
  }

  return Math.max.apply(Math, array);
}

console.log("Largest number: " + findLargestNumber(testArray));
console.log("Largest number (Math): " + findLargestNumberMath(testArray));

//2. Create a function that removes duplicate elements from an array and prints the resulting array.
console.log("before removing: " + testArray.length);

function removeDuplicates(array) {
  if (array.length === 0 || !Array.isArray(array)) {
    return null;
  }

  return [...new Set(array)];
}

testArray = removeDuplicates(testArray);
console.log("after removing: " + testArray.length);

//3. Write a program that calculates the average of an array of numbers. Use early returns to handle empty arrays or invalid inputs.
function arrayAverage(array) {
  if (array.length === 0 || !Array.isArray(array)) {
    return null;
  }

  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum / array.length;
}

console.log("array average: " + arrayAverage(testArray));

//4. Create a program that searches for a specific element in an array and returns its index.
function returnElementIndex(array, element) {
  if (array.length === 0 || !Array.isArray(array)) {
    return null;
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      return i;
    }
  }
  return null;
}

console.log("element index: " + returnElementIndex(testArray, 50));
