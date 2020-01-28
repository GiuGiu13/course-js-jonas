function getWeather(woeid) {
    fetch(`https://www.metaweather.com/api/location/${woeid}/`)
        .then(result => {
            console.log(result)
            return result.json();
        })
        .then(data => {
            // console.log(data)
            const tomorrow = data.consolidated_weather[0];
            console.log(`Temperature in ${data.title} stay between ${tomorrow.min_temp} and ${tomorrow.max_temp}`)
        })
        .catch(error => console.log(error));
}

getWeather(2487956);
getWeather(44418);
async function getWeatherAW(woeid){
    //to handle error from async - try catch statement
    //it will check if there is an error, if not it will show the code otherwise it will 
    //go to the next function -->catch
    try{
        const result = await fetch(`https://www.metaweather.com/api/location/${woeid}/`);
        const data = await result.json();
        // console.log(data)
        const tomorrow = data.consolidated_weather[1];
        console.log(`Temperature tomorrow in ${data.title} stay between ${tomorrow.min_temp} and ${tomorrow.max_temp}`)
    
        return data;

    }catch(error){
        console.log(error)
    }

}
getWeatherAW(2487956);
//DON'T DO THIS
// const dataLondon = getWeatherAW(44418);
// console.log(dataLondon)

//DO THIS
let dataLondon;
getWeatherAW(44418).then((data) =>{
    dataLondon =  data
    console.log(dataLondon)
});


