var TSArrays = /** @class */ (function () {
    function TSArrays() {
    }
    TSArrays.prototype.testArrays = function () {
        var strArray;
        strArray = ["Rakesh", "Anita", "Lisha", "Mayaansh"];
        var strArrayObj = new Array();
        for (var i = 0; i < strArray.length; i++) {
            strArrayObj[i] = strArray[i];
        }
        strArrayObj.forEach(function (element) {
            console.log(element);
        });
    };
    return TSArrays;
}());
var tSArrays = new TSArrays();
tSArrays.testArrays();
