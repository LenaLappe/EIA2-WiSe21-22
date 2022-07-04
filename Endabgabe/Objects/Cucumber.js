"use strict";
var Gemuesegarten;
(function (Gemuesegarten) {
    class Cucumber extends Gemuesegarten.Vegetable {
        constructor(_uiField) {
            super(_uiField, "cucumber", 400, 0.2, 9, 0.4, 5, 10, 10, 10, 10);
        }
        onClick() {
            alert("on click Cucumber");
        }
    }
    Gemuesegarten.Cucumber = Cucumber;
})(Gemuesegarten || (Gemuesegarten = {}));
//# sourceMappingURL=Cucumber.js.map