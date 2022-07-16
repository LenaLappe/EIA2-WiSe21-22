"use strict";
var Gemuesegarten;
(function (Gemuesegarten) {
    class Cucumber extends Gemuesegarten.Vegetable {
        constructor(_uiField) {
            super(_uiField, "cucumber", 120000, 1, 9, 5, 5, 15, 
            //   10,
            3);
        }
        onClick() {
            alert("on click Cucumber");
        }
    }
    Cucumber.informationInstance = new Cucumber(null);
    Gemuesegarten.Cucumber = Cucumber;
})(Gemuesegarten || (Gemuesegarten = {}));
//# sourceMappingURL=Cucumber.js.map