
import View from './Views.js'
class addRecipeView extends View {

    _parentElement = document.querySelector('.upload')
    _successMessage = 'Recipe was successfully uploaded'
    _window = document.querySelector('.add-recipe-window')
    _overlay = document.querySelector('.overlay')
    _btnOpen = document.querySelector('.nav__btn--add-recipe')
    _btnClose = document.querySelector('.btn--close-modal')

    //Since opening/closing the modal is purely UI logic and doesn't need data from the controller, you can just run it immediately when the class is created.

    constructor() {
        super()
        this._initialMarkup = this._parentElement.innerHTML
        this.addHandlerShowWindow()
        this.addHandlerHideWindow()
    }

    toggleWindow() {
        const isHidden = this._window.classList.contains('hidden')
        
        // If opening (currently hidden), restore the form
        if (isHidden) {
            this._parentElement.innerHTML = this._initialMarkup
        }
        
        this._overlay.classList.toggle('hidden')
        this._window.classList.toggle('hidden')
    }
    addHandlerShowWindow() {
        this._btnOpen.addEventListener('click', this.toggleWindow.bind(this))
    }
    addHandlerHideWindow() {
        this._btnClose.addEventListener('click', this.toggleWindow.bind(this))
        this._overlay.addEventListener('click', this.toggleWindow.bind(this))
    }

    // form handling method

    addHandlerUpload(handler) {
        this._parentElement.addEventListener('submit', function (e) {
            e.preventDefault()

            const dataArr = [...new FormData(this)]
            const data = Object.fromEntries(dataArr)

            handler(data)
        })

    }
}
export default new addRecipeView()