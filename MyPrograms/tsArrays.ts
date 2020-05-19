class TSArrays{
    testArrays(){
        var strArray: string[]
        strArray = ["Rakesh", "Anita", "Lisha", "Mayaansh"]   
        
        var strArrayObj = new Array()

        for(var i:number = 0; i < strArray.length; i++){
            strArrayObj[i] = strArray[i]
        }        

        strArrayObj.forEach(element => {
            console.log(element)
        });        

    }
}

var tSArrays = new TSArrays()
tSArrays.testArrays()


