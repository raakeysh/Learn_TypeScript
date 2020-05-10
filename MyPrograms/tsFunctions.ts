class Person{
   //TypeScript function with optional parameter
    displayDetails(firstName:string, lastName:string, email?:string) {
        console.log("My first name is "+firstName +"\n")    
        console.log("My last name is "+lastName +"\n")    

        if(email != undefined)
        console.log("and my email is "+email +"\n")    
    }

    //TypeScript function with Rest parameter
    /**
     * @param operation - pass parameter 'add' for Addition and 'multiply' for multiplication
     * @param num - pass n number of digits to perform addtion or multiplication
     */
    mathOperation( operation: string, ...num: number[]){
        var opResult: number = null 
        switch (operation.toLowerCase()) {
            case "add":{
                for(var i: number = 0;i<num.length;i++){
                    opResult = num[i] + opResult            
                }       
            } 
                break;
            case "multiply":{
                opResult = 1
                for(var i: number = 0;i<num.length;i++){
                    opResult = num[i] * opResult            
                }        
                break;
            }
            default:
                break;
        }            
        console.log("Operation result is "+opResult)
    }
}

var person = new Person()
// person.displayDetails("Lisha", "Raut")
// person.displayDetails("Rakesh", "Raut", "raakesh.raut@gmail.com")
person.mathOperation("Add",1,2,3,4,5,6,7,8,9)
person.mathOperation("multiply",1,2,3,4,5,6,7,8,9)
