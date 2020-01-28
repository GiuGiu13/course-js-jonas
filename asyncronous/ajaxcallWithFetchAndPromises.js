//it will give us an error because we can make request just related to our server.
// so on the server needs to be added -cors-
//usually you channell the request from your server, doing an ajax request on our own server and
//send the data to the browser
//because we don't have server we can use the online resource crossorigin.me to avoid the problem

//fetch api gets data and return promise
//just fetch return the promise without us to care to return the promise

//if you have problem to fetch api because of cors
//https://alfilatov.com/posts/run-chrome-without-cors/
//open -n -a /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --args --user-data-dir="/tmp/chrome_dev_test" --disable-web-security
//https://crossorigin.me/

//woeid whereonearthid
function getWeather(woeid) {
    fetch(`https://www.metaweather.com/api/location/${woeid}/`)
        .then(result => {
            console.log(result)
            return result.json();
        })
        .then(data => {
            // console.log(data)
            const today = data.consolidated_weather[0];
            console.log(`Temperature in ${data.title} stay between ${today.min_temp} and ${today.max_temp}`)
        })
        .catch(error => console.log(error));
}

getWeather(2487956);
getWeather(44418);
// if there is the wrong id
//getWeather(4448);