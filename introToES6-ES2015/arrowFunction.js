///arrow function
const years = [1990, 1965, 1983, 1937];

//ES5
var ages5 = years.map(function (el) {
    return 2020 - el;
});
// console.log(ages5);

//ES6
//one line of code not need parenthesis
let ages6 = years.map(el => 2020 - el);

//more then one line of code need parenthesis
ages6 = years.map((el, index) => `Age element ${index + 1}: ${2020 - el}.`);

//more then two line of code need curly braces and the return word on the end
ages6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}: ${age}.`
});
// console.log(ages6);

//arrow function don't have -this- keyword

//ES5
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function(){
        var self = this;
        document.querySelector('.green').addEventListener('click', function(){
            var str = 'This is box number' + self.position + ' and it is ' + self.color;
            alert(str)
        })
    }
}

// box5.clickMe();

//ES6
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function(){
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number' + this.position + ' and it is ' + this.color;
            alert(str)
        })
    }
}

// box6.clickMe();

//in ES5 the function click me cannot really use this because it's refer to the window  global object, so we need to specify the
//with self -this-
//in ES6 with the arrow function we can use -this- refering to the object

// const box66 = {
//     color: 'green',
//     position: 1,
//     //1
//     clickMe: () => {
//         document.querySelector('.green').addEventListener('click', () => {
//             var str = 'This is box number' + this.position + ' and it is ' + this.color;
//             alert(str)
//         })
//     }
// }

// box66.clickMe();
//1 using here the arrow function it will use the -this- keyword related to the surrounding that in this cas
//is the global object window so it became undefined

//function constractor
//ES5
function Person(name){
    this.name = name;
}

Person.prototype.myFriend5 = 
    function(friends){
        var arr = friends.map(function(el){
            return this.name + ' is friends with ' + el;
        }.bind(this));
        
    // console.log(arr)
}

var friends = ['Rob', 'Jane', 'Giusy'];
new Person('John').myFriend5(friends);
//we use bind to rely -this- keyword to the name out of the prototype

//ES6
Person.prototype.myFriend6 = 
    function(friends){
        var arr = friends.map(el => `${this.name} is friends with ${el}`);
        // console.log(arr)
}
new Person('Mike').myFriend6(friends);
