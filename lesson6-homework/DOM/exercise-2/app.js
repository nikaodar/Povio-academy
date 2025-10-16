const button = document.querySelector(".toggle-btn");
const picture = document.querySelector(".picture");
let storedValue = localStorage.getItem("imageVisibility");

if (storedValue === null) {
  storedValue = "visible";
  localStorage.setItem("imageVisibility", storedValue);
}

if (storedValue === "visible") {
  picture.style.visibility = "visible";
  picture.style.opacity = 1;
} else {
  picture.style.visibility = "hidden";
  picture.style.opacity = 0;
}

button.addEventListener("click", () => {
  const currentlyVisible = picture.style.visibility === "visible";

  if (currentlyVisible) {
    picture.style.opacity = 0;
    setTimeout(() => {
      picture.style.visibility = "hidden";
      localStorage.setItem("imageVisibility", "hidden");
    }, 500);
  } else {
    picture.style.opacity = 1;
    picture.style.visibility = "visible";
    localStorage.setItem("imageVisibility", "visible");
  }
});
