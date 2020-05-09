class Person{
    displayDetails(firstName:string, lastName:string, email?:string) {
        console.log("My first name is "+firstName +"\n")    
        console.log("My last name is "+lastName +"\n")    

        if(email != undefined)
        console.log("and my email is "+email +"\n")    
    }
}

var person = new Person()
person.displayDetails("Lisha", "Raut")
person.displayDetails("Rakesh", "Raut", "raakesh.raut@gmail.com")