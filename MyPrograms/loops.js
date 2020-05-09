var Loops = /** @class */ (function () {
    function Loops() {
    }
    Loops.prototype.forLoop = function () {
        for (var num = 1; num <= 20; num++) {
            if (num == 5)
                continue;
            if (num == 16)
                break;
            console.log(num);
        }
    };
    Loops.prototype.whileLoop = function () {
        var num = 10;
        while (num > 5) {
            console.log(num);
            num--;
        }
    };
    return Loops;
}());
var loop = new Loops();
//loop.forLoop()
loop.whileLoop();
