"use strict";
var Gemuesegarten;
(function (Gemuesegarten) {
    class Carrots extends Gemuesegarten.Vegetable {
        constructor(_uiField) {
            super(_uiField, "carrot", 90000, 0.5, 6, 0.1, 2, 10, 10, 10, 10);
        }
        onClick() {
            alert("on click Carrots");
        }
    }
    Gemuesegarten.Carrots = Carrots;
})(Gemuesegarten || (Gemuesegarten = {}));
//# sourceMappingURL=Carrots.js.map