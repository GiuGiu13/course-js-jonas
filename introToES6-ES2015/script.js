// LET AND CONST
//ES5
// var name5 = 'Jane Smith';
// var age5 = 23;
// name5 = 'Jane Miller';
// console.log(name5)

// //ES6
// const name6 = 'Jane Smith';
// let age6 = 23;
// name6 = 'Jane Miller';
// console.log(name6)

//ES5
function driversLicense5(passedTest){
    if(passedTest){
        //4
        // console.log(firstName)

        var firstName = 'John';
        var yearOfBirth = 1990;

        // console.log(firstName + ', born in ' + yearOfBirth + ' is officially allowed to drive a car.' )
    }

    console.log(firstName + ', born in ' + yearOfBirth + ' is officially allowed to drive a car.' )
}

driversLicense5(true);

//ES6
function driversLicense6(passedTest){

    //4
    // console.log(firstName)

    //2
    let firstName;
    //2 
    const yearOfBirth = 1990;
    if(passedTest){
        //1 let firstName = 'John';
        //1 const yearOfBirth = 1990;

        //3 
        firstName = 'John';

        // console.log(firstName + ', born in ' + yearOfBirth + ' is officially allowed to drive a car.' )
    }
    console.log(firstName + ', born in ' + yearOfBirth + ' is officially allowed to drive a car.' )
}

driversLicense6(true);

//if we take out the console log from the if statement, the variables with var will work because they are fuction scoped, instead let and 
//const variables will not work because they are block scoped
//the block is the code between curly braces
//2 so we declare let variable out of the block and it will work, instead we cannot use a const variable in the block and use it out of it
//4 in es5 if call a variable before initialize it will say undefined, in es6 it's not possible, it will give us a error


// let i = 23;
// for(let i  = 0; i < 5; i++ ){
//     console.log(i)
// }
// console.log(i);

var i = 23;
for(var i  = 0; i < 5; i++ ){
    console.log(i)
}
console.log(i);
//with let because the block scope, also if two variables have the same name they will be different and separate variables
//with var the variable with the same name will be overwritten