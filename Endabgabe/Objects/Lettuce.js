"use strict";
var Gemuesegarten;
(function (Gemuesegarten) {
    class Lettuce extends Gemuesegarten.Vegetable {
        constructor(_uiField) {
            super(_uiField, "lettuce", 60000, 3, 5, 1, 2, 9, 
            //   10,
            2);
        }
        onClick() {
            alert("on click Lettuce");
        }
    }
    Lettuce.informationInstance = new Lettuce(null);
    Gemuesegarten.Lettuce = Lettuce;
})(Gemuesegarten || (Gemuesegarten = {}));
//# sourceMappingURL=Lettuce.js.map