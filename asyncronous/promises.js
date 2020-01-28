//in the promise we put the function that we are going to fire when promise is ready
const getIDs = new Promise((resolve, reject) => {
    //this is call the execution function and take two arguments
    setTimeout(() => {
        //we call the resolve function, to fulfield the promise
        //we return resolve from promise if it's succesfull
        resolve([523, 883, 432, 974]);
    }, 1500);
});
const getRecipe = recID => {
    return new Promise((resolve, reject) => {
        setTimeout((ID) => {
            const recipe = {
                title: 'Crunchies, croccantini',
                publisher: 'Gaga'
            }
            resolve(`${ID}: ${recipe.title}`);
        }, 1500, recID)
    
    });
};

//then will allow us to get the result of the promise and see if the promise is fulfill
//so we pass a callback function in case the promise is successfull
//IDs in the callback function will be the result of the promise

const getRelated = publisher => {
    return new Promise((resolve, reject) => {
        setTimeout(pub => {
            const recipe = {
                title: 'Fish and chips',
                publisher: 'Gaga'
            }
            resolve(`${pub}: ${recipe.title}`);
        }, 1500, publisher);
    })
}
getIDs
    .then(IDs => {
        console.log(IDs);
        return getRecipe(IDs[2]);
    })
    .then(recipe => {
        console.log(recipe);
        return getRelated('Gaga');
    })
    .then(recipe =>{
        console.log(recipe)
    })
    .catch(error => {
        console.log('error!');
    });
//catch is the method that handle the promise if it is rejected

//to consume the promise we can use two methods