const button = document.querySelector(".counter-btn");
const p = document.querySelector(".display-count");

let counter = parseInt(localStorage.getItem("counter")) || 0;

p.textContent = "Counter: " + counter;

button.addEventListener("click", () => {
  counter++;
  localStorage.setItem("counter", counter);
  p.textContent = "Counter: " + counter;
});
