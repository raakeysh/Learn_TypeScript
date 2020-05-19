//import {VariableScope} from "./VariableScope";

//Declare class
class Greeting{
    greet(): void {
        var name: string = "Rakesh";
        var level: number;
        var eligible = true;
        var secret = "Easy";        
        level = <number> <any> secret

        console.log("my name is " +name, "and I am on " +level +" level")
        
    }
}

//Create object of a class and call class members
var displayMessage = new Greeting()
displayMessage.greet()

// var variableScope = new VariableScope();
// console.log(variableScope.displayValues)


//create object using object literal
const objLiteral = {
    balance: 500
}

const total = objLiteral.balance
console.log(total)