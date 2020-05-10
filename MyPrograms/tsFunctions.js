var Person = /** @class */ (function () {
    function Person() {
    }
    //TypeScript function with optional parameter
    Person.prototype.displayDetails = function (firstName, lastName, email) {
        console.log("My first name is " + firstName + "\n");
        console.log("My last name is " + lastName + "\n");
        if (email != undefined)
            console.log("and my email is " + email + "\n");
    };
    //TypeScript function with Rest parameter
    /**
     * @param operation - pass parameter 'add' for Addition and 'multiply' for multiplication
     * @param num - pass n number of digits to perform addtion or multiplication
     */
    Person.prototype.mathOperation = function (operation) {
        var num = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            num[_i - 1] = arguments[_i];
        }
        var opResult = null;
        switch (operation.toLowerCase()) {
            case "add":
                {
                    for (var i = 0; i < num.length; i++) {
                        opResult = num[i] + opResult;
                    }
                }
                break;
            case "multiply": {
                opResult = 1;
                for (var i = 0; i < num.length; i++) {
                    opResult = num[i] * opResult;
                }
                break;
            }
            default:
                break;
        }
        console.log("Operation result is " + opResult);
    };
    return Person;
}());
var person = new Person();
// person.displayDetails("Lisha", "Raut")
// person.displayDetails("Rakesh", "Raut", "raakesh.raut@gmail.com")
person.mathOperation("Add", 1, 2, 3, 4, 5, 6, 7, 8, 9);
person.mathOperation("multiply", 1, 2, 3, 4, 5, 6, 7, 8, 9);
