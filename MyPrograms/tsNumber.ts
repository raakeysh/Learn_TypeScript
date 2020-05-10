class TSNumbers{
    numDemo(){      
            var display = function(){
                console.log("TypeScript Number Properties: "); 
                console.log("Maximum value that a number variable can hold: " + Number.MAX_VALUE); 
                console.log("The least value that a number variable can hold: " + Number.MIN_VALUE); 
                console.log("Value of Negative Infinity: " + Number.NEGATIVE_INFINITY); 
                console.log("Value of Negative Infinity:" + Number.POSITIVE_INFINITY);        
            }

            display()

            function employee(id:number,name:string) { 
                this.id = id 
                this.name = name 
             } 

             var emp = new employee(123, "Smith")
             employee.prototype.email = "smith@abc.com"

             console.log(emp.email)
        }


}

var tSNumbers = new TSNumbers()
tSNumbers.numDemo()


