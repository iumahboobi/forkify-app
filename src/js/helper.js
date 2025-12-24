
import icons from 'url:../img/icons.svg' // not programming files in parcel 2

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

//2, Next and Previous buttons.
export const nextPageBtn = function (curPage, numPages) {
  if (curPage === numPages) return ''
  return `<button data-goto="${curPage+1}" class="btn--inline pagination__btn--next">
            <span>${curPage+1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button>`
}

export const prePageBtn = function (curPage) {
  if (curPage === 1) return ''
  return `<button data-goto="${curPage-1}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>${curPage-1}</span>
          </button>`
}