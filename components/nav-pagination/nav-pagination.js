import { createButton } from "../nav-button/nav-button.js";

export function createPagination(page, maxPage, onPrevClick, onNextClick) {
  const pagination = document.createElement("div");
  pagination.classList.add("navigation__pagination");
  pagination.dataset.js = "pagination";
  pagination.textContent = `${page} / ${maxPage}`;

  const prevButton = createButton("Prev", onPrevClick);
  prevButton.dataset.js = "button-prev";
  prevButton.classList.add("button");
  pagination.appendChild(prevButton);

  const nextButton = createButton("Next", onNextClick);
  nextButton.dataset.js = "button-next";
  nextButton.classList.add("button");
  pagination.appendChild(nextButton);

  return pagination;
}
