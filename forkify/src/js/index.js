//import default export
// import str from './models/Search';
// //import named export
// // 1) import {add, multiply, ID} from './views/searchView';
// // console.log(`Using imported function! ${add(ID, 2)} and ${multiply(3,5)}, ${str}`)
// //if you want change name of imported element
// // 2) import {add as a , multiply as m, ID} from './views/searchView';
// // console.log(`Using imported function! ${a(ID, 2)} and ${m(3,5)}, ${str}`)
// //import everything with a name
// import * as searchView from './views/searchView';
// console.log(`Using imported function! ${searchView.add(searchView.ID, 2)} and ${searchView.multiply(3,5)}, ${str}`)

import Search from './models/Search';
//here we want everything from search view module
//so we are going to have every variable from search view stored in the variable searchView
import * as searchView from './views/searchView';

import { elements, renderLoader, clearLoader } from './views/base'

//all the data in this moment is a state, and we want that to be in one place, like one central variable object
//that contain all the data in one moment, in one place, in  one object
//global state of the app
//-search object
//-current recipe object
//-shopping list object
//-liked recipes
// all this data will be stored in the state object in one time, in one place
// we start with an empy object, so everytime we reload the app the state will be empty
const state = {};

const controlSearch = async () =>{
    //1) get query from view
    const query = searchView.getInput() //TODO

    if(query){
        //2) new search object and add to state
        state.search = new Search(query);

        //3) prepare UI for results
        searchView.clearInput();
        searchView.clearResults();

        renderLoader(elements.searchRes);


        //4) search for recipes
        await state.search.getResults();

        //5) render results on UI
        clearLoader();
        searchView.renderResults(state.search.result);
    }
}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

elements.searchResPages.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline');
 
    if(btn){
        const goToPage = parseInt(btn.dataset.goto, 10);
        searchView.clearResults();
        searchView.renderResults(state.search.result, goToPage);
        console.log(goToPage)
    }
});