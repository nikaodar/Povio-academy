//1. Write a function that counts the frequency of characters in a given string. You can accomplish this using maps.
function countCharFrequency(str) {
  const frequencyMap = new Map();

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (frequencyMap.has(char)) {
      frequencyMap.set(char, frequencyMap.get(char) + 1);
    } else {
      frequencyMap.set(char, 1);
    }
  }

  for (let [char, count] of frequencyMap) {
    console.log(`'${char}': ${count}x`);
  }
}

countCharFrequency("hello world");

//2. Write a function that performs currency conversion using a Map to store conversion rates.
function currencyConversion(amount, originalCurrency, newCurrency) {
  const currencies = new Map([
    ["eur", 1],
    ["usd", 1.16],
    ["gbp", 0.87],
    ["jpy", 176.68],
  ]);

  if (!currencies.has(originalCurrency) || !currencies.has(newCurrency)) {
    console.log(
      "currency not suppored. supported currrencies: eur, usd, gbp, jpy"
    );
    return null;
  }

  const toEur = amount / currencies.get(originalCurrency);
  const converted = toEur * currencies.get(newCurrency);

  return converted;
}

console.log(currencyConversion(100, "eur", "jpy"));
console.log(currencyConversion(50, "usd", "gbp"));
