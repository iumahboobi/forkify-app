import icons from 'url:../../img/icons.svg' // not programming files in parcel 2

export default class View {

  _data

  render(data, render = true) {

    if (!data || (Array.isArray(data) && data.length === 0)) return this.handleError()

    this._data = data
    const markup = this._generateMarkup()
    if (!render) return markup
    this._clear()
    this._parentElement.insertAdjacentHTML('afterbegin', markup)

  }

  update(data) {

    this._data = data
    const newMarkup = this._generateMarkup()
    const newDOM = document.createRange().createContextualFragment(newMarkup)
    const newElements = Array.from(newDOM.querySelectorAll('*'))
    const curElements = Array.from(this._parentElement.querySelectorAll('*'))

    newElements.forEach((newEl, i) => {
      const curEl = curElements[i]
      
      // Fix: If the new element has no corresponding current element, we can't update it. 
      // This happens if the node lists are different lengths.
      if (!curEl) return

      //Update changed Text
      if (!newEl.isEqualNode(curEl) && newEl.firstChild?.nodeValue?.trim() !== '') {
        curEl.textContent = newEl.textContent
      }

      //Update changed Attributes
      if (!newEl.isEqualNode(curEl)) {
        Array.from(newEl.attributes).forEach(attr => curEl.setAttribute(attr.name, attr.value))
      }
    })
  }

  _clear() {
    this._parentElement.innerHTML = ""
  }

  renderSpinner() {

    const markup = `<div class="spinner">
          <svg>
            <use href="${icons}#icon-loader"></use>
          </svg>
        </div>`
    this._parentElement.innerHTML = ""
    this._parentElement.insertAdjacentHTML('afterbegin', markup)
  }

  // default message
  handleError(message = this._errorMessage) {

    const markup = `<div class="error">
            <div>
              <svg>
                <use href="${icons}#icon-alert-triangle"></use>
              </svg>
            </div>
            <p>${message}</p>
          </div>`
    this._clear()
    this._parentElement.insertAdjacentHTML('afterbegin', markup)
  }

  handleSuccessMessage(message = this._successMessage) {

    const markup = `<div class="message">
            <div>
              <svg>
                <use href="${icons}#icon-smile"></use>
              </svg>
            </div>
            <p>${message}</p>
          </div>`
    this._clear()
    this._parentElement.insertAdjacentHTML('afterbegin', markup)
  }
}