//1. Create a function that checks if a string is a palindrome (reads the same forward and backward).
function checkPalindrome(input) {
  for (let i = 0; i < input.length / 2; i++) {
    if (input[i].toLowerCase() !== input[input.length - 1 - i].toLowerCase()) {
      return false;
    }
  }
  return true;
}

console.log(checkPalindrome("test"));

//2. Create a function that capitalizes the first letter of each word in a given sentence.
function capitalizeEachWord(input) {
  return input
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(capitalizeEachWord("test string"));

//3. Create a function that prompts the user for their name and age using the prompt. Use string interpolation to create a personalized greeting.
function greetUser() {
  const name = prompt("enter name:");
  if (name === null || name.trim() === "") {
    alert("name is empty");
    return;
  }

  const age = prompt("enter age:");
  if (age === null || age.trim() === "") {
    alert("Age cannot be empty.");
    return;
  }

  alert(`welcome, ${name}. you are ${age} years old`);
}
greetUser();

//4. Create a function that generates a random quote (out of the pool of 10 quotes that you can decide). Use string interpolation to display the quote.
function generateRandomQuote() {
  const quotes = [
    "Be yourself; everyone else is already taken ― Oscar Wilde",
    "So many books, so little time. ― Frank Zappa",
    "A room without books is like a body without a soul. ― Marcus Tullius Cicero",
    "You know you're in love when you can't fall asleep because reality is finally better than your dreams. ― Dr. Seuss",
    "You only live once, but if you do it right, once is enough. ― Mae West",
    "Be the change that you wish to see in the world. ― Mahatma Gandhi",
    "In three words I can sum up everything I've learned about life: it goes on. ― Robert Frost",
    "If you tell the truth, you don't have to remember anything. ― Mark Twain",
    "To live is the rarest thing in the world. Most people exist, that is all. ― Oscar Wilde",
    "A friend is someone who knows all about you and still loves you. ― Elbert Hubbard",
  ];

  const random = Math.floor(Math.random() * quotes.length);

  console.log(`Random quote: ${quotes[random]}`);
}

generateRandomQuote();
