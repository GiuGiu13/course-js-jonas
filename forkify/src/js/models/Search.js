// default export
//use when you want export one thing from a module
//we don't specify any const or variable at all, just use a simple expression
// export default 'I am an export string';

import axios from 'axios';

export default class Search {
    //  class module need a constructor and inside the constructore you pass the value that you need 
    // in the class
    constructor(query) {
        this.query = query;
    }

    //if you have problem with CORS use
    //https://alfilatov.com/posts/run-chrome-without-cors/
    //open -n -a /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --args --user-data-dir="/tmp/chrome_dev_test" --disable-web-security
    //https://forkify-api.herokuapp.com/api/search
    async getResults() {
        const proxy = 'https://cors-anywhere.herokuapp.com/'
        try {
            const res = await axios(`${proxy}https://forkify-api.herokuapp.com/api/search?q=${this.query}`);
            this.result = res.data.recipes
        } catch (error) {
            console.log(error)
        }

    }
}
