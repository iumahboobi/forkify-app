import icons from 'url:../../img/icons.svg' // not programming files in parcel 2
import fracty from 'fracty';
import View from './Views'
class RecipeView extends View {

  _parentElement = document.querySelector('.recipe')
  _errorMessage = 'Id not found or not correct id please try again'
  _successMessage = 'Id  found or not correct id please try again'

  addBookmarkHandler(handler) {

    this._parentElement.addEventListener('click', function (e) {
      e.preventDefault()
      const btn = e.target.closest('.btn--bookmark')
      if (!btn) return
      handler()
    })

  }

  addHandlerUpdateServings(handler) {

    this._parentElement.addEventListener('click', function (e) {

      e.preventDefault()

      const btn = e.target.closest('.btn--increase-servings')
      if (!btn) return
      const updateTo = btn.dataset.updateTo
      if (updateTo < 1 || updateTo > 20) return
      handler(Number(updateTo))

    })


  }
  _formatQuantity(quantity) {
    if (!quantity) return '';
    const formatted = fracty(quantity).toString();
    // Check if the result is an excessively long fraction (likely a precision error)
    if (formatted.length > 10 && formatted.includes('/')) {
        // Fallback to rounded decimal if fraction is messy
        return Number(quantity).toFixed(2).replace(/\.00$/, ''); 
    }
    return formatted;
  }

  _generateMarkup() {

    return `
       <figure class="recipe__fig">
          <img src="${this._data.image}" alt="Tomato" class="recipe__img" />
          <h1 class="recipe__title">
            <span>${this._data.title}</span>
          </h1>
        </figure>

        <div class="recipe__details">
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${icons}#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
            <span class="recipe__info-text">minutes</span>
          </div>
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${icons}#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
            <span class="recipe__info-text">servings</span>

            <div class="recipe__info-buttons">
              <button class="btn--tiny btn--increase-servings" data-update-to="${this._data.servings - 1}">
                <svg>
                  <use href="${icons}#icon-minus-circle"></use>
                </svg>
              </button>
              <button class="btn--tiny btn--increase-servings" data-update-to="${this._data.servings + 1}">
                <svg>
                  <use href="${icons}#icon-plus-circle"></use>
                </svg>
              </button>
            </div>
          </div>

          <div class="recipe__user-generated">
            <svg>
              <use href="${icons}#icon-user"></use>
            </svg>
          </div>
          <button class="btn--round btn--bookmark">
            <svg class="">
              <use href="${icons}#icon-bookmark${this._data.bookMarked ? '-fill' : ''} "></use>
            </svg>
          </button>
        </div>

        <div class="recipe__ingredients">
          <h2 class="heading--2">Recipe ingredients</h2>
          <ul class="recipe__ingredient-list">
           ${this._data.ingredients
        .map(ing => `
            <li class="recipe__ingredient">
              <svg class="recipe__icon">
          <use href="${icons}#icon-check"></use>
            </svg>
            <div class="recipe__quantity">${this._formatQuantity(ing.quantity)}</div>
            <div class="recipe__description">
          <span class="recipe__unit">${ing.unit}</span>
          ${ing.description}
        </div>
      </li>
    `).join('')}
    </ul>
        </div>

        <div class="recipe__directions">
          <h2 class="heading--2">How to cook it</h2>
          <p class="recipe__directions-text">
            This this #was carefully designed and tested by
            <span class="recipe__publisher">The Pioneer Woman</span>. Please check out
            directions at their website.
          </p>
          <a
            class="btn--small recipe__btn"
            href="http://thepioneerwoman.com/cooking/pasta-with-tomato-cream-sauce/"
            target="_blank"
          >
            <span>Directions</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </a>
        </div>`
  }
  addHandleRender(handleRecipe) {

    ["hashchange", "load"].forEach(ev => window.addEventListener(ev, handleRecipe))

  }

}

export default new RecipeView()