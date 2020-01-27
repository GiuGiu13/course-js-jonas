// ///// maps / new data structure

const question = new Map();
question.set('question' , 'What is the official name of the latest major javascript version?');
//set data
//in maps the key can be not just a string but also a number of boolean
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'correct answer! :D');
question.set(false, 'wrong, please try again!');

//get data
console.log(question.get('question'))
//it's not the length but the size 
// console.log(question.size)

//remove data and check key in the map
if(question.has(4)){
    // question.delete(4);
    // console.log('Answer number 4')
}

//delete everything from the map
// question.clear();

//looping with for each loop
// question.forEach((value, key) => console.log(`this is ${key} and it's set to ${value}`));
//looping with for of loop
// if we want also get the value we need to use destructuring
for(let [key, value] of question.entries()){
    // console.log(`this is ${key} and it's set to ${value}`)
    if(typeof(key) === 'number' ){
        console.log(`Answer ${key}: ${value}`)
    }

}
//parseInt convert a string in number
const ans = parseInt(prompt('Write the correct answer'));
//if instead of a map we had a object we needed to use a if statement
//with map we can use get and check true/ false key
console.log(question.get(ans === question.get('correct')));

//reasons why maps are good:
//1) we can use everything as keys
//2) because maps are very easy to loop throght them and manipolate data
//3) because it's really easy to get the size of a map using the size property
//4) it's really easy to add and remove data from map

//if we want build hashmaps







