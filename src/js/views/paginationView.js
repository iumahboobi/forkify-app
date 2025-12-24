import icons from 'url:../../img/icons.svg' // not programming files in parcel 2
import View from './Views'
import { nextPageBtn, prePageBtn } from '../helper.js'
class PaginationView extends View {
    _parentElement = document.querySelector('.pagination')

    addHandlerClick(handler) {

        //common parent element of buttons

        this._parentElement.addEventListener('click',function(e) {

            e.preventDefault()
            const btn = e.target.closest('.btn--inline')
            if (!btn) return
            handler(+btn.dataset.goto)

        })

    }

    _generateMarkup() {

        const curPage = this._data.page
        const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage)
        //1. Page 1 and there are other pages

        if (curPage === 1 && numPages > 1) {
            return nextPageBtn(curPage, numPages)
        }

        //3. Last page
        if (curPage === numPages) {
            return prePageBtn(curPage)
        }

        //4. Other page eg everything between page 1 and last page


        //4. Other page
        if (curPage < numPages) {
            return `${prePageBtn(curPage)}${nextPageBtn(curPage, numPages)}`
        }

        //2. Page 1 and there are no other pages.

        return ''
    }

}

export default new PaginationView()
