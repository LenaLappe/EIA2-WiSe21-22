"use strict";
var A09_2_AutumnClasses;
(function (A09_2_AutumnClasses) {
    class Cloud {
        constructor(_size) {
            console.log("constructor Cloud");
        }
        move(_timeslice) {
            console.log("move Cloud");
        }
        draw() {
            console.log("draw Cloud");
        }
    }
    A09_2_AutumnClasses.Cloud = Cloud;
})(A09_2_AutumnClasses || (A09_2_AutumnClasses = {}));
//# sourceMappingURL=Cloud.js.map