//import {VariableScope} from "./VariableScope";
//Declare class
var Greeting = /** @class */ (function () {
    function Greeting() {
    }
    Greeting.prototype.greet = function () {
        var name = "Rakesh";
        var level;
        var eligible = true;
        var secret = "Easy";
        level = secret;
        console.log("my name is " + name, "and I am on " + level + " level");
    };
    return Greeting;
}());
//Create object of a class and call class members
var displayMessage = new Greeting();
displayMessage.greet();
// var variableScope = new VariableScope();
// console.log(variableScope.displayValues)
//create object using object literal
var objLiteral = {
    balance: 500
};
var total = objLiteral.balance;
console.log(total);
//# sourceMappingURL=main.js.map