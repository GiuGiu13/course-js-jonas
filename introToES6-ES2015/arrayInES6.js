//array in ES6

const boxes = document.querySelectorAll('.box');

//ES5
// var boxesArr5 =  Array.prototype.slice.call(boxes);
// boxesArr5.forEach(function(cur){
//     cur.style.backgroundColor = 'dodgerblue';
// })

//ES6
//with -from- we can trasform a nodelist elements in an array
const boxesArr6 = Array.from(boxes);
boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue')
//code shorter
// Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');

//ES5
// for(var i = 0; i < boxesArr5.length; i++){
//     if(boxesArr5[i].className === 'box blue'){
//         continue;
//     }
//     boxesArr5[i].textContent = 'I am changed to blue!';
// }
//continue just keep going in the loop, the break keyword will stop the loop

//ES6
//in ES6 we have a new way of loop that combine foreach and forloop together
for (const cur of boxesArr6){
    if(cur.className.includes('blue')){
        continue;
    }
    cur.textContent = 'I am changed to blue!';
}

//with include you don't need to write all the classes

//ES5
var ages = [12, 17, 8, 21, 14, 11];
var full = ages.map(function(cur){
    return cur  >= 18;
})
console.log(full)
console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

//ES6
//find index method
console.log(ages.findIndex(cur => cur >= 18));
//find method
console.log(ages.find(cur => cur >= 18));



