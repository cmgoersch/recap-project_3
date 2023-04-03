import { createCharacterCard } from "./components/card/card.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
let maxPage = 1;
let page = 1;
let searchQuery = "";

async function fetchCharacters() {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}&name=${searchQuery}`
    );
    const data = await response.json();
    const characters = data.results;
    cardContainer.innerHTML = "";
    characters.forEach((character) => {
      const card = createCharacterCard(character);
      cardContainer.append(card);
    });
    maxPage = data.info.pages;
    updatePagination();
  } catch (error) {
    console.error(error);
  }
}

function updatePagination() {
  pagination.textContent = `${page} / ${maxPage}`;
}

prevButton.addEventListener("click", () => {
  if (page > 1) {
    page--;
    fetchCharacters();
  }
});

nextButton.addEventListener("click", () => {
  if (page < maxPage) {
    page++;
    fetchCharacters();
  }
});

fetchCharacters();

searchBar.addEventListener("submit", (event) => {
  event.preventDefault();
  searchQuery = searchBar.querySelector("input").value;
  fetchCharacters();
  searchBar.reset();
});
