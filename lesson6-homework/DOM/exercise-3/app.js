const button = document.querySelector(".toggle-btn");
const buttonContainer = document.querySelector(".button-container");

let hasBackgroundColor = false;

button.addEventListener("click", () => {
  if (hasBackgroundColor) {
    buttonContainer.style.backgroundColor = "transparent";
    hasBackgroundColor = false;
  } else {
    buttonContainer.style.backgroundColor = "lightgreen";
    hasBackgroundColor = true;
  }
});
