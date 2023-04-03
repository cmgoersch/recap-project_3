import { createButton } from "../nav-button/nav-button.js";

export function createPagination(page, maxPage, onPrevClick, onNextClick) {
  const pagination = document.createElement("span");
  pagination.classList.add("navigation__pagination");
  pagination.dataset.js = "pagination";
  pagination.textContent = `${page} / ${maxPage}`;

  const prevButton = createButton("Prev", onPrevClick);
  prevButton.dataset.js = "button-prev";
  prevButton.classList.add("button", "button--prev");
  pagination.appendChild(prevButton);

  const nextButton = createButton("Next", onNextClick);
  nextButton.dataset.js = "button-next";
  nextButton.classList.add("button", "button--next");
  pagination.appendChild(nextButton);

  return pagination;
}
