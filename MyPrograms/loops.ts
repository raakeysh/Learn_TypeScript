class Loops{

    forLoop(): void{
        for(var num: number=1;num<=20;num++){
            if(num == 5)
            continue
            if(num == 16)
            break
            console.log(num)

        }        
    }


    whileLoop(): void{
        var num: number = 10
        while(num > 5){
            console.log(num)
            num--
        }
    }
}

var loop = new Loops()
//loop.forLoop()
loop.whileLoop()