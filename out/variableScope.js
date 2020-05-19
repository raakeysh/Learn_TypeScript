"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var myName = "Rakesh Raut - Global";
var VariableScope = /** @class */ (function () {
    function VariableScope() {
        this.level = "Expert - Class Level";
    }
    VariableScope.prototype.displayValues = function () {
        var local = "Local";
        console.log(myName);
        console.log(VariableScope.address);
        console.log(local);
        var variableScope = new VariableScope();
        console.log(variableScope.level);
    };
    VariableScope.address = "6809 Mayfield - Static";
    return VariableScope;
}());
exports.VariableScope = VariableScope;
var variableScope = new VariableScope();
console.log(variableScope.displayValues());
//# sourceMappingURL=variableScope.js.map