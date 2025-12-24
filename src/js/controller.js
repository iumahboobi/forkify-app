import recipeView from './views/recipeView.js'
import * as model from './model.js'
import icons from 'url:../img/icons.svg' // not programming files in parcel 2
import searchView from './views/searchView.js'
import resultsView from './views/resultsView.js'
import paginationView from './views/paginationView.js'
import bookmarkView from './views/bookmarkView.js'
import addRecipeView from './views/addRecipeView.js'
import { MODAL_CLOSE_SEC } from './config.js'

// NEW API URL (instead of the one shown in the video)
// https://forkify-api.jonas.io

///////////////////////////////////////

//1. Show loader

//2. Show Recipe
const controlRecipes = async function () {

  try {

    const id = window.location.hash.slice(1)
    //update the results view the (left search recipee)
    // update results view to mark seletected search result
    resultsView.update(model.getSearchResult())
    bookmarkView.update(model.state.bookMarks)

    if (!id) return
    // Render spinner
    recipeView.renderSpinner()

    // Fake delay
    await model.recipeModel(id)
    //2. Render recipe
    recipeView.render(model.state.recipe)

  } catch (error) {
    addRecipeView.handleError(error.message)
  }
}

//2. Search Controller
const controlSearchResults = async () => {

  try {
    const query = searchView.getQuery()
    if (!query) return

    //2. Load search Results"
    resultsView.renderSpinner()
    await model.loadSearchResult(query)

    // 3. Render Results
    resultsView.render(model.getSearchResult())

    //4. Render initial Pagination buttons
    //pass the entire search objec
    paginationView.render(model.state.search)

  } catch (error) {
    console.log(error)
  }
}

//3. controller for pagination if any button is clicked
const controlPagination = function (gotoPage) {

  resultsView.render(model.getSearchResult(gotoPage))
  //4. Render initial Pagination buttons
  //pass the entire search objec
  paginationView.render(model.state.search)

}

// 4.controller for updating servings
const controlServings = function (newServings) {
  // update the recipe servings (in state)
  model.updateServings(newServings)
  // update the view
  // recipeView.render(model.state.recipe)
  recipeView.update(model.state.recipe)
}


//5. Controller for Bookmared Recipe
const controlBookMark = function () {
  // 1. Add/remove bookmark
  if (!model.state.recipe.bookMarked) model.addBookMark(model.state.recipe)
  else model.deleteBookMark(model.state.recipe.id)

  // 2. Update recipe view
  recipeView.update(model.state.recipe)
  bookmarkView.render(model.state.bookMarks)
}

const controlBookmarks = function () {
  bookmarkView.render(model.state.bookMarks)
}

// Control Add Recipe

const controlAddRecipe = async function (newRecipe) {

  try {
    // Show loading spinner
    addRecipeView.renderSpinner()

    //1. Uploaded recipe
    await model.uploadRecipe(newRecipe)

    // 2. update bookmark view
    bookmarkView.render(model.state.bookMarks)

    //3. Render recipe
    recipeView.render(model.state.recipe)

    //4.Display success message
    addRecipeView.handleSuccessMessage()

    //5. close form windo because we cant see the recipeView after sometime
    setTimeout(() => {
      addRecipeView.toggleWindow()
    }, MODAL_CLOSE_SEC * 1000)

  } catch (error) {
    addRecipeView.handleError(error.message)
  }
}
// 
// publisher subscriber patterns
const init = () => {
  recipeView.addHandleRender(controlRecipes)
  recipeView.addHandlerUpdateServings(controlServings)
  recipeView.addBookmarkHandler(controlBookMark)
  searchView.addHandlerSearch(controlSearchResults)
  paginationView.addHandlerClick(controlPagination)
  bookmarkView.addHandlerRender(controlBookmarks)
  addRecipeView.addHandlerUpload(controlAddRecipe)
}
init()