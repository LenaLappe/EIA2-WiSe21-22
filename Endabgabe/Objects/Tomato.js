"use strict";
var Gemuesegarten;
(function (Gemuesegarten) {
    class Tomato extends Gemuesegarten.Vegetable {
        constructor(_uiField) {
            super(_uiField, "tomato", 10000, 0.3, 7, 0.1, 1, 10, 10, 10, 10);
        }
        onClick() {
            alert("on click Tomato");
        }
    }
    Gemuesegarten.Tomato = Tomato;
})(Gemuesegarten || (Gemuesegarten = {}));
//# sourceMappingURL=Tomato.js.map