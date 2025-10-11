//1. Create a program that performs division and handles potential division by zero errors using try-catch blocks. Print the result or an error message.
function division(a, b) {
  try {
    if (b === 0) {
      throw new Error("division by zero not allowed");
    }

    const divisionResult = a / b;
    console.log(`Division result: ${a} ÷ ${b} = ${divisionResult}`);
    return divisionResult;
  } catch (error) {
    console.error(`error: ${error.message}`);
  } finally {
  }
}

division(4, 2);
division(1, 0);
