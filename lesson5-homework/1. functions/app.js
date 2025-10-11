//1. Create a function that calculates the area of a rectangle using variables for length and width.
function rectangleArea(length, width) {
  return length * width;
}

console.log("Rectange area:", rectangleArea(4, 3));

//2. Create a function that determines if a given number is positive, negative, or zero.
function checkNumber(number) {
  if (number === 0) {
    return "Zero";
  } else if (number > 0) {
    return "Positive";
  } else {
    return "Negative";
  }
}

console.log("Check Number:" + checkNumber(4));

//3. Create a function that checks if a year entered by the user is a leap year.
function isLeapYear(year) {
  return year % 400 === 0 || (year % 4 === 0 && year % 100 != 0);
}

console.log("isLeapYear:" + isLeapYear(2025));

//4. Create a function that prints the Fibonacci series up to a given number using a for loop, and using recursion.
function fibonacci(number) {
  if (number <= 1) {
    return number;
  } else {
    return fibonacci(number - 1) + fibonacci(number - 2);
  }
}

console.log("Fibonacci: " + fibonacci(12));

//5. Create a function that calculates the factorial of a number using a for loop
function calculateFactorial(number) {
  let result = 1;
  for (let i = number; i > 0; i--) {
    result *= i;
  }
  return result;
}

console.log("Factorial: " + calculateFactorial(5));
