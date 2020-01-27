///subclasses

//ES5
var Person5 = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function () {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var Athlete5 = function (name, yearOfBirth, job, olimpicGames, medals) {
    Person5.call(this, name, yearOfBirth, job);
    this.olimpicGames = olimpicGames;
    this.medals = medals;
}
Athlete5.prototype = Object.create(Person5.prototype);

//this new method can be added just after created the new object
Athlete5.prototype.wonMedal = function(){
    this.medals++
    console.log(this.medals);
}


var johnAtlete5 = new Athlete5('John', 1990, 'swimmer', 3, 10);

johnAtlete5.calculateAge();
johnAtlete5.wonMedal();

//ES6
class Person6 {
    constructor(name, yearOfBirth, job){
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge(){
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
}

class Athlete6 extends Person6 {
    constructor(name, yearOfBirth, job, olimpicGames, medals){
        super(name, yearOfBirth, job);
        this.olimpicGames = olimpicGames;
        this.medals = medals;
    }

    wonMedal(){
        this.medals++;
        console.log(this.medals)
    }
}

const johnAtlete6 = new Athlete6('John', 1990, 'swimmer', 3, 10);
johnAtlete6.calculateAge();
johnAtlete6.wonMedal();
