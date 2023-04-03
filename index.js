import { createCharacterCard } from "./components/card/card.js";
import { createButton } from "./components/nav-button/nav-button.js";
import { createPagination } from "./components/nav-pagination/nav-pagination.js";
import { createSearchBar } from "./components/search-bar/search-bar.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const navigation = document.querySelector('[data-js="navigation"]');

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
  const pagination = createPagination(page, maxPage, onPrevClick, onNextClick);
  navigation.replaceChild(
    pagination,
    navigation.querySelector('[data-js="pagination"]')
  );
}

function onPrevClick() {
  if (page > 1) {
    page--;
    fetchCharacters();
  }
}

function onNextClick() {
  if (page < maxPage) {
    page++;
    fetchCharacters();
  }
}

function onSubmit(event) {
  event.preventDefault();
  searchQuery = event.target.querySelector("input").value;
  fetchCharacters();
  event.target.reset();
}
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = createSearchBar(onSubmit);
searchBarContainer.appendChild(searchBar);

const pagination = createPagination(page, maxPage, onPrevClick, onNextClick);
navigation.appendChild(pagination);

fetchCharacters();
