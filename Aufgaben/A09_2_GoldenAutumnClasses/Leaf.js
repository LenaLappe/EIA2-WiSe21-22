"use strict";
var A09_2_AutumnClasses;
(function (A09_2_AutumnClasses) {
    class Leaf {
        constructor(_size) {
            console.log("constructor leaf");
        }
        move(_timeslice) {
            console.log("move leaf");
        }
        draw() {
            console.log("draw leaf");
        }
    }
    A09_2_AutumnClasses.Leaf = Leaf;
})(A09_2_AutumnClasses || (A09_2_AutumnClasses = {}));
//# sourceMappingURL=Leaf.js.map