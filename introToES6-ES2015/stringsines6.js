//strings in ES6

let firstName = 'John';
let lastName = 'Smith';
const yearofbirth = 1990;

function calcAge(year){
    return 2020 - year;
}

//let's think we want put all this string together
//ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearofbirth + '. Today he is ' + calcAge(yearofbirth)
+ ' years old.' );

//ES6
//template literals (backtick)
console.log(`This is ${firstName} ${lastName}. He was born in ${yearofbirth}. Today he is ${calcAge(yearofbirth)} years old.`)

const n = `${firstName} ${lastName}`;
//starts with
console.log(n.startsWith('J'));
//ends with
console.log(n.endsWith('th'));
//includes
console.log(n.includes(' '));
//repeat method
console.log(`${firstName} `.repeat(5));


