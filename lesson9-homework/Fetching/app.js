const API_URL = "https://api.animechan.io/v1/quotes/random";

async function getQuote() {
  const loadingElement = document.querySelector(".loading");
  const errorElement = document.querySelector(".error");
  const quoteContainer = document.querySelector(".quote-container");
  const quoteElement = document.querySelector(".quote");
  const authorElement = document.querySelector(".author");

  loadingElement.classList.remove("hidden");
  errorElement.classList.add("hidden");
  quoteContainer.classList.add("hidden");

  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Error fetching data");
    }

    const quote = await response.json();
    const data = quote.data;

    quoteElement.textContent = `“${data.content}”`;
    authorElement.textContent = `— ${data.character.name}, ${data.anime.name}`;

    loadingElement.classList.add("hidden");
    quoteContainer.classList.remove("hidden");
  } catch (e) {
    loadingElement.classList.add("hidden");
    errorElement.classList.remove("hidden");
    console.error("Error:", e);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".new-quote-btn").addEventListener("click", getQuote);
  document.querySelector(".retry-btn").addEventListener("click", getQuote);

  getQuote();
});
