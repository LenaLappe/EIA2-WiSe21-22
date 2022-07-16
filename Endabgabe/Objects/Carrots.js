"use strict";
var Gemuesegarten;
(function (Gemuesegarten) {
    class Carrots extends Gemuesegarten.Vegetable {
        constructor(_uiField) {
            super(_uiField, "carrot", 90000, 2, 6, 2, 4, 12, 
            //   10,
            7);
        }
        onClick() {
            alert("on click Carrots");
        }
    }
    Carrots.informationInstance = new Carrots(null);
    Gemuesegarten.Carrots = Carrots;
})(Gemuesegarten || (Gemuesegarten = {}));
//# sourceMappingURL=Carrots.js.map