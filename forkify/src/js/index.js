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


//if you have problem with CORS use
//https://alfilatov.com/posts/run-chrome-without-cors/
//open -n -a /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --args --user-data-dir="/tmp/chrome_dev_test" --disable-web-security

import axios from 'axios';
//https://forkify-api.herokuapp.com/api/search
async function getResults(query) {
    const proxy = 'https://cors-anywhere.herokuapp.com/'
    try {
        const res = await axios(`${proxy}https://forkify-api.herokuapp.com/api/search?q=${query}`);
        const recipes = res.data.recipes
        console.log(recipes)
    } catch (error) {
        console.log(error)
    }

}
getResults('pasta');