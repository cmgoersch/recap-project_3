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
let maxPages = 1;
let page = 1;
const searchQuery = "";

async function fetchCharacters(page) {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}`
    );
    const data = await response.json();
    const characters = data.results;
    maxPages = data.info.count;
    renderCharacters(characters);
    updatePagination(page, maxPages);
  } catch (error) {
    console.error(error);
  }
}

function renderCharacters(characters) {
  cardContainer.innerHTML = "";
  const character = characters[0];
  const card = createCharacterCard(character);
  cardContainer.append(card);
}
function updatePagination(currentPage, maxPages) {
  pagination.textContent = `Page ${currentPage} of ${maxPages}`;
}

prevButton.addEventListener("click", () => {
  if (page > 1) {
    page--;
    fetchCharacters(page);
  }
});

nextButton.addEventListener("click", () => {
  if (page < maxPages) {
    page++;
    fetchCharacters(page);
  }
});

fetchCharacters(page);
async function fetchCaracters() {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}`
    );
    const data = await response.json();
    const characters = data.results;
    cardContainer.innerHTML = "";
    characters.forEach((character) => {
      const card = createCharacterCard(character);
      cardContainer.append(card);
    });
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

fetchCaracters();
