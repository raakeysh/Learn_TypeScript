var myName: string = "Rakesh Raut - Global"
 export class VariableScope{
    level = "Expert - Class Level"
    static address = "6809 Mayfield - Static"

    displayValues(): void{
        var local = "Local"
        console.log(myName)
        console.log(VariableScope.address)
        console.log(local);

        var variableScope = new VariableScope()
        console.log(variableScope.level)
        
    }    

}
        var variableScope = new VariableScope()
        console.log(variableScope.displayValues())