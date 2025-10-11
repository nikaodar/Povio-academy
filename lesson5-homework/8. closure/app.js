//1. Write a program that uses a closure to create a private counter variable. Implement functions to increment and retrieve the counter value. Hint:
//nested functions, where the upper function has the private variables and contains functions for various operations. Then it returns an object with all functions.
function privateCounter() {
  let count = 0;

  function increment() {
    count++;
  }

  function getCount() {
    return count;
  }

  return { increment, getCount };
}

const counter = privateCounter();
counter.increment();
console.log(counter.getCount());

//2. Create a program that uses a closure to simulate a bank account. Implement functions to deposit, withdraw, and check the account balance.
function bankAccount(startBalance = 0) {
  let balance = startBalance;

  function deposit(value) {
    balance += value;
  }

  function withdraw(value) {
    balance -= value;
  }

  function getBalance() {
    return balance;
  }

  return { deposit, withdraw, getBalance };
}

const accout = bankAccount(100);
accout.deposit(50);
accout.withdraw(30);
console.log(accout.getBalance());
