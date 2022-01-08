"use strict";
var A10_2_GoldenAutmnPoly;
(function (A10_2_GoldenAutmnPoly) {
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
    A10_2_GoldenAutmnPoly.Vector = Vector;
})(A10_2_GoldenAutmnPoly || (A10_2_GoldenAutmnPoly = {}));
//# sourceMappingURL=Vector.js.map