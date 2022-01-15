"use strict";
var A11_1_GoldenAutmnAbstract;
(function (A11_1_GoldenAutmnAbstract) {
    class Vector {
        constructor(_x, _y) {
            console.log("constructor");
            this.x = _x;
            this.y = _y;
        }
        set(_x, _y) {
            console.log("set");
            this.x = _x;
            this.y = _y;
        }
        scale(_factor) {
            console.log("scale");
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend) {
            console.log("add");
            this.x += _addend.x;
            this.y += _addend.y;
        }
    }
    A11_1_GoldenAutmnAbstract.Vector = Vector;
})(A11_1_GoldenAutmnAbstract || (A11_1_GoldenAutmnAbstract = {}));
//# sourceMappingURL=Vector.js.map