"use strict";
var Gemuesegarten;
(function (Gemuesegarten) {
    class Potato extends Gemuesegarten.Vegetable {
        constructor(_uiField) {
            super(_uiField, "potato", 9000, 0.5, 10, 0.05, 5, 10, 10, 10, 10);
        }
        onClick() {
            alert("on click Potato");
        }
    }
    Gemuesegarten.Potato = Potato;
})(Gemuesegarten || (Gemuesegarten = {}));
//# sourceMappingURL=Potato.js.map