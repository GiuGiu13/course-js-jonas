//async await was create for use to consume promises, 

const getIDs = new Promise((resolve, reject) => {
    setTimeout(() => {
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

//this is a asynchronous function, it will run in the background
async function getRecipesAW(){
    //inside async function we can have more than await functions
    const IDs = await getIDs;
    //the code will stop on the await, and fire the function getIDs 
    console.log(IDs)

    const recipe = await getRecipe(IDs[2]);
    console.log(recipe);

    const related = await getRelated('Gaga');
    console.log(related)

    return recipe;

    //so we wait until each of this promises are resolved, so with the keyword await
    //the execution stop and wait until we get the promise 
    //the await expression can be used just in an async function
}

//this log will show the promise -->pending and not executed because the function in firing in the background,
//so also reading the code and arriving on the the log the function is still in the background
// const rec = getRecipesAW();
// console.log(rec)
//so we can use the then method, that will read the return value in the async function
getRecipesAW().then(result => console.log(`${result} is the best ever!`));
