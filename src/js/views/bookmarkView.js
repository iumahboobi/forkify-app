import previewView from './previewView.js'
import View from './Views.js'

class BookmarkView extends View {
  _parentElement = document.querySelector('.bookmarks__list')
  _errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it :)'
  _successMessage = ''

  _generateMarkup() {
    return this._data.map(bookMark => previewView.render(bookMark,false)).join('')
  }
  addHandlerRender(handler) {
    window.addEventListener('load',handler)
  }
}
export default new BookmarkView()