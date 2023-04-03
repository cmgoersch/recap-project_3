export function createSearchBar(onSubmit) {
  const searchBarContainer = document.createElement("div");
  searchBarContainer.dataset.js = "search-bar-container";
  searchBarContainer.classList.add("search-bar-container");

  const searchBar = document.createElement("form");
  searchBar.dataset.js = "search-bar";
  searchBar.classList.add("search-bar");

  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Search characters...";
  input.classList.add("search-bar__input");
  searchBar.appendChild(input);

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.textContent = "Search";
  submitButton.classList.add("search-bar__button");
  submitButton.innerHTML = `<img
  class="search-bar__icon"
  src="assets/magnifying-glass.png"
  alt=""
/>`;
  searchBar.appendChild(submitButton);

  searchBar.addEventListener("submit", onSubmit);

  searchBarContainer.appendChild(searchBar);

  return searchBarContainer;
}
