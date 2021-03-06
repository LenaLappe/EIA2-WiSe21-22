"use strict";
var A09_2_AutumnClasses;
(function (A09_2_AutumnClasses) {
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
    A09_2_AutumnClasses.Vector = Vector;
})(A09_2_AutumnClasses || (A09_2_AutumnClasses = {}));
//# sourceMappingURL=Vector.js.map