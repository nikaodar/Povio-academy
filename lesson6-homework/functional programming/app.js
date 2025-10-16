//1. Write a function that takes an array of numbers as input and returns a new array containing only the odd numbers.
function filterOddNumbersRegular(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

function filterOddNumbersFunctional(array) {
  return array.filter((number) => number % 2 !== 0);
}

//2. Write a function that takes an array of numbers as input and returns the sum of the squares of all the numbers.
function sumOfSquaresRegular(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i] * array[i];
  }

  return sum;
}

function sumOfSquaresFunctional(array) {
  return array.reduce((sum, number) => sum + number * number, 0);
}

//3. Write a function that takes an array of numbers as input and returns true if all numbers in the array are positive, otherwise returns false.
function allNumbersPositiveRegular(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] <= 0) {
      return false;
    }
  }
  return true;
}

function allNumbersPositiveFunctional(array) {
  return array.every((number) => number > 0);
}

//4. Write a function that takes an array of objects representing people with their age, and sorts the array in ascending order based on their age.
function sortByAgeRegular(array) {
  //bubble sort
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j].age > array[j + 1].age) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

function sortByAgeFunctional(array) {
  return [...array].sort((a, b) => a.age - b.age);
}

//5. Write a function that takes an array of numbers as input and returns the index of the first negative number in the array. If there are no negative numbers, return -1.
function returnNegativeIndexRegular(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      return i;
    }
  }
  return -1;
}

function returnNegativeIndexFunctional(array) {
  return array.findIndex((number) => number < 0);
}
