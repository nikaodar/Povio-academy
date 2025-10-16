const button = document.querySelector(".generate-btn");
const pNumberContainer = document.querySelector(".number-container");

const storedValue = localStorage.getItem("randomNumber");
if (storedValue === null) {
  pNumberContainer.textContent = "";
} else if (isNaN(storedValue)) {
  pNumberContainer.textContent = "NaN";
} else {
  pNumberContainer.textContent = storedValue;
}

button.addEventListener("click", () => {
  const randomValue = Math.floor(Math.random() * 101);
  pNumberContainer.textContent = randomValue;
  localStorage.setItem("randomNumber", randomValue);
});
