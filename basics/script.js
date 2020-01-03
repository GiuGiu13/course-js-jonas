/***********************************
 * Variables and data type
 */
// console.log('ciao');
// var firstName = 'Giusy';
// console.log(firstName);

// var lastName = 'Smith';
// var age = 28;
// var fullAge = true;

// console.log(fullAge);

/***********************************
 * Variables mutation and type coercion
 */

var firstName = "John";
var age = 28;

//type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job ='teacher';
isMarried =  false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried); 

//variable mutation
age = 'tweenty eight';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried); 

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName)