// ////////////// default parameters

//we use them when we want more than one parameters to be set a default value

//ES5
// function SmithPerson(firstName, yearOfBirth, lastName, nationality){
//     lastName === undefined ? lastName = "Smith" : lastName = lastName;
//     nationality === undefined ? nationality = "English" : nationality = nationality;

//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.yearOfBirth = yearOfBirth;
//     this.nationality = nationality;
// }

//ES6
//we can declare the defalut parameter straight where we define the arguments
function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'English'){
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}



//we can call a function specifying just some of the arguments, we don't need to call all the arguments
var john = new SmithPerson('John', 1999)
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'spanish')
