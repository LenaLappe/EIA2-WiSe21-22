"use strict";
var A11_1_GoldenAutmnAbstract;
(function (A11_1_GoldenAutmnAbstract) {
    class Acorn extends A11_1_GoldenAutmnAbstract.Drawable {
        constructor(_canvasWidth, _canvasHeight, _offset) {
            super();
            this.canvasWidth = _canvasWidth;
            this.canvasHeight = _canvasHeight;
            this.offset = _offset;
            const x = Math.floor(Math.random() * _canvasWidth);
            const y = Math.floor(Math.random() * _canvasHeight) + _offset;
            this.position = new A11_1_GoldenAutmnAbstract.Vector(x, y);
        }
        draw(crc2) {
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();
            crc2.ellipse(34, 5, 7, 15, 10, 10, 20);
            crc2.closePath();
            crc2.fillStyle = "brown";
            crc2.fill();
            crc2.restore();
        }
    }
    A11_1_GoldenAutmnAbstract.Acorn = Acorn;
})(A11_1_GoldenAutmnAbstract || (A11_1_GoldenAutmnAbstract = {}));
//# sourceMappingURL=Acorn.js.map