var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.displayDetails = function (firstName, lastName, email) {
        console.log("My first name is " + firstName + "\n");
        console.log("My last name is " + lastName + "\n");
        if (email != undefined)
            console.log("and my email is " + email + "\n");
    };
    return Person;
}());
var person = new Person();
person.displayDetails("Lisha", "Raut");
person.displayDetails("Rakesh", "Raut", "raakesh.raut@gmail.com");
