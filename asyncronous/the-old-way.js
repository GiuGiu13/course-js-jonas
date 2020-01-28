//we are goign to simulate a call to a remote server

//three callbacks nestede in each other
function getRecipe(){
    setTimeout(() => {
        const recipeID = [523, 883, 432, 974]
        console.log(recipeID)

        setTimeout(id => {
            const recipe = {
                title: 'Crunchies, croccantini',
                publisher: 'Gaga'
            }
            console.log(`${id}: ${recipe.title}`);

            setTimeout(publisher => {
                const recipe2 = {
                    title: 'Fish and chips',
                    publisher: 'Gaga'
                }
                console.log(recipe2)
            }, 1500, recipe.publisher)
        }, 1500, recipeID[2])
    }, 1500)
}
getRecipe();
//fake chain ajax call from server
//this triangle shape create the so called callback hell because it get confuse and hard to manage 