///rest parameters
//allowed us to pass arbitrary number of arguments in a function, and use this number in the function

//ES5
// function isFullAge5(){
//     // console.log(arguments);
//     var argsArr = Array.prototype.slice.call(arguments);
//     argsArr.forEach(function(cur){
//         console.log(2016 - cur >= 18);
//     })
// }
 
// isFullAge5(1990, 1999, 1965);
// isFullAge5(1990, 1999, 1965, 2016, 1987);

//ES6
//the rest operator will take all the arguments and trasform them in an array and use them in the function

// function isFullAge6(...years){
//     // console.log(years)
//     years.forEach(cur => console.log((2016 - cur) >= 18));
// }
// isFullAge6(1990, 1999, 1965);
// isFullAge6(1990, 1999, 1965, 2016, 1987);

//the difference between the spread operator and the rest parameter is the place where we use them
//the spread operator is used in function call, the rest is use in the function declararion to 
//accept an arbitrary number of parameters

//ES5
function isFullAge5(limit ){
    // console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments, 1);
    argsArr.forEach(function(cur){
        console.log(2016 - cur >= limit);
    })
}
 
isFullAge5(21, 1990, 1999, 1965);
// isFullAge5(1990, 1999, 1965, 2016, 1987);

//ES6
//the rest operator will take all the arguments and trasform them in an array and use them in the function

function isFullAge6(limit, ...years){
    // console.log(years)
    years.forEach(cur => console.log((2016 - cur) >= limit));
}

isFullAge6(16, 1990, 1999, 1965, 2016, 1987);


