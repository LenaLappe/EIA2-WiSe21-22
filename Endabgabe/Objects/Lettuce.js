"use strict";
var Gemuesegarten;
(function (Gemuesegarten) {
    class Lettuce extends Gemuesegarten.Vegetable {
        constructor(_uiField) {
            super(_uiField, "lettuce", 1000, 0.3, 5, 0.09, 1, 10, 10, 10, 10);
        }
        onClick() {
            alert("on click Lettuce");
        }
    }
    Gemuesegarten.Lettuce = Lettuce;
})(Gemuesegarten || (Gemuesegarten = {}));
//# sourceMappingURL=Lettuce.js.map