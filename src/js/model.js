import dataJson from '../data.json'
import { API_URL, RESULTS_PER_PAGE, PAGE } from './config.js'
export const state = {
    recipe: {},
    search: {
        query: '',
        results: [],
        page: PAGE,
        resultsPerPage: RESULTS_PER_PAGE
    },
    bookMarks: [],
    customRecipes: []

}

const createRecipeObject = function (data) {

    return {
        id: data.id,
        title: data.title,
        publisher: data.publisher,
        sourceUrl: data.source_url,
        image: data.image_url,
        ingredients: data.ingredients,
        cookingTime: data.cooking_time,
        servings: data.servings,
        //conditionaly add property in object
        ...(data.key && { key: data.key })
    }
}


export const recipeModel = async (id) => {

    try {
        const res = await fetch(`${API_URL}?id=${id}`)
        const data = await res.json()

        if (!res.ok) throw new Error(`${data.message} (${res.status})`)
        if (data.status === 'fail') throw new Error(data.message)

        const { recipe } = data.data
        state.recipe = createRecipeObject(recipe)

        //1. we check if the recipe with sane ud us there so we use some method for this
        if (state.bookMarks.some(bookMark => bookMark.id === id))
            state.recipe.bookMarked = true
        else state.recipe.bookMarked = false

    } catch (error) {
        throw error
    }
}

export const loadSearchResult = async (query) => {

    try {
        const q = typeof query === 'string' ? query.trim() : ''
        state.search.query = q
        if (!q) {
            state.search.results = []
            return state.search.results
        }

        const res = await fetch(`${API_URL}?search=${q}`)
        const data = await res.json()

        if (!res.ok) throw new Error(`${data.message} (${res.status})`)

        const { recipes } = data.data
        
        state.search.results = recipes.map(rec => ({
            id: rec.id,
            title: rec.title,
            publisher: rec.publisher,
            image: rec.image_url,
        }))
        state.search.page = 1

        return state.search.results
    } catch (error) {
        throw error
    }
}


export const getSearchResult = (page = state.search.page) => {
    state.search.page = page
    const start = (page - 1) * state.search.resultsPerPage
    const end = page * state.search.resultsPerPage
    return state.search.results.slice(start, end)
}

export const updateServings = function (newServings) {
    state.recipe.ingredients.forEach(ing => {
        ing.quantity = (ing.quantity * newServings) / state.recipe.servings

    })
    state.recipe.servings = newServings
}

export const addBookMark = function (recipe) {
    //1. Add bookmark
    state.bookMarks.push(recipe)

    //2. Mark current recipe as bookmarked
    if (recipe.id === state.recipe.id) state.recipe.bookMarked = true
    storeBookMarks()
}

export const deleteBookMark = function (id) {
    //1. Delete bookmark
    const index = state.bookMarks.findIndex(el => el.id === id)
    state.bookMarks.splice(index, 1)

    //2. Mark current recipe as NOT bookmarked
    if (id === state.recipe.id) state.recipe.bookMarked = false

    storeBookMarks()
}


// Stroing bookmark in local storage

const storeBookMarks = function () {
    localStorage.setItem('bookMarks', JSON.stringify(state.bookMarks))
}

// Loading bookmarks from the loacal storage
const init = function () {
    const storage = localStorage.getItem('bookMarks') // might have nothing
    if (storage) state.bookMarks = JSON.parse(storage)

    // Read custom recipes from the local storage
    const customStorage = localStorage.getItem('customRecipes')
    if (customStorage) state.customRecipes = JSON.parse(customStorage)

    state.customRecipes.forEach(recipe => {
        dataJson.data.recipes.push(recipe)
    })
}
init()

// uploadRecipe function 

export const uploadRecipe = async function (newRecipe) {
    try {
        const ingArr = Object.entries(newRecipe)
        const ingredients = ingArr.filter(entry => entry[0].startsWith('ingredient') && entry[1] !== '')

        const ingredientsObjArr = ingredients.map(ing => {
            const spliting = ing[1].replaceAll(' ', '').split(',')
            if (spliting.length !== 3)
                throw new Error('Wrong ingredient format! Please use the correct format :)')
            const [quantity, unit, description] = spliting
            return { quantity: quantity ? +quantity : null, unit, description }
        })

        const recipe = {
            title: newRecipe.title,
            publisher: newRecipe.publisher,
            source_url: newRecipe.sourceUrl,
            image_url: newRecipe.image,
            servings: +newRecipe.servings,
            cooking_time: +newRecipe.cookingTime,
            ingredients: ingredientsObjArr,
        }

        const res = await fetch(`${API_URL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(recipe),
        })

        const data = await res.json()

        if (!res.ok) throw new Error(`${data.message} (${res.status})`)
        if (data.status === 'fail') throw new Error(data.message)
        
        // Update state with the new recipe returned from API (which includes the new ID)
        state.recipe = createRecipeObject(data.data.recipe)
        addBookMark(state.recipe)
        
        // We don't need customRecipes local storage anymore if we are saving to DB!
        // But if you want to keep them separated in UI, we can. 
        // For now, let's treat it as a regular recipe from the DB.

    } catch (error) {
        throw error
    }
}

// Add custom recipe to the state
export const persistCustomRecipe = function () {
    localStorage.setItem('customRecipes', JSON.stringify(state.customRecipes))
}