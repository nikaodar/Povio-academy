//1. Write a program that creates an object representing a car. Add properties like make, model, and year. Print the car's details.
const car = { make: "Toyota", model: "Yaris", year: "2020" };
console.log("Make:" + car.make);
console.log("Model: " + car.model);
console.log("year: " + car.year);

//2. Write a program that counts the frequency of words in a given sentence and stores the results in an object. Print the object.
function countWordFrequency(string) {
  let split = string
    .toLowerCase()
    .replace(/[.,!?\"'(){}\[\]]/g, "")
    .split(/\s+/);
  let frequencyObject = {};

  for (let i = 0; i < split.length; i++) {
    const word = split[i];
    if (frequencyObject[word]) {
      frequencyObject[word]++;
    } else {
      frequencyObject[word] = 1;
    }
  }
  return frequencyObject;
}

const result = countWordFrequency("Hello world! world hello, world");
console.log(result);
