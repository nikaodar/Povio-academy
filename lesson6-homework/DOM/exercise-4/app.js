const input = document.querySelector(".item-input");
const button = document.querySelector(".add-btn");
const list = document.querySelector(".item-list");

button.addEventListener("click", () => {
  const inputValue = input.value.trim();
  if (!inputValue) {
    return;
  }

  const newLi = document.createElement("li");
  newLi.textContent = inputValue;
  list.appendChild(newLi);

  input.value = "";
});
