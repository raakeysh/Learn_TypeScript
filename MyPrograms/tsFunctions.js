var Person = /** @class */ (function () {
    function Person() {
        this.rMessage = null;
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
        this.rMessage = operation;
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
        //TypeScript Anonymous function
        var message = function (rMessage) {
            return rMessage.toUpperCase();
        };
        console.log(message(this.rMessage));
        //TypeScript function constructor
        var myFunction = new Function("op1", "op2", "return op1 * op2");
        console.log(myFunction(2, 3));
        //Lamda statement
        var foo = function (x) {
            if (typeof x == "number")
                console.log("x is number");
            if (typeof x == "string")
                console.log("x is string");
        };
        foo(100);
        foo("Tom");
    };
    return Person;
}());
var person = new Person();
// person.displayDetails("Lisha", "Raut")
// person.displayDetails("Rakesh", "Raut", "raakesh.raut@gmail.com")
person.mathOperation("Add", 1, 2, 3, 4, 5, 6, 7, 8, 9);
person.mathOperation("multiply", 1, 2, 3, 4, 5, 6, 7, 8, 9);
