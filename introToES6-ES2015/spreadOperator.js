///spread operator
//espand elements from arrray in places like arguments and function call

function addFourAges(a, b, c, d) {
    return a + b + c + d;
}
var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);

//ES5
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

//ES6
const sum3 = addFourAges(...ages);
console.log(sum3);

const familySmith = ['John', 'Jane', 'Ally'];
const familyMiller = ['Mary', 'Rob', 'Ann'];

const bigFamily = [...familySmith, 'Gaga' , ...familyMiller];
console.log(bigFamily);

const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];
console.log(all);
Array.from(all).forEach( cur => cur.style.color = 'salmon')


