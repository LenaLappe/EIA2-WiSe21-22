"use strict";
var A10_2_GoldenAutmnPoly;
(function (A10_2_GoldenAutmnPoly) {
    class Leaf extends A10_2_GoldenAutmnPoly.Drawable {
        constructor(_canvasWidth, _canvasHeight) {
            super();
            this.canvasWidth = _canvasWidth;
            this.canvasHeight = _canvasHeight;
            const x = Math.floor(Math.random() * _canvasWidth);
            const y = Math.floor(Math.random() * _canvasHeight);
            this.position = new A10_2_GoldenAutmnPoly.Vector(x, y);
        }
        move() {
            console.log("move leaf");
            this.position.x += 2;
            this.position.y += 3;
            if (this.position.x >= this.canvasWidth) {
                this.position.x = 0;
            }
            if (this.position.y >= this.canvasHeight) {
                this.position.y = 0;
            }
        }
        draw(crc2) {
            //Blatt von David
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();
            crc2.lineWidth = 2;
            crc2.strokeStyle = "black";
            crc2.moveTo(0, 0);
            crc2.lineTo(25, 25);
            crc2.stroke();
            crc2.fillStyle = "#ab2b2b";
            crc2.moveTo(25, 25);
            crc2.bezierCurveTo(0, 50, 25, 75, 75, 75);
            crc2.moveTo(25, 25);
            crc2.bezierCurveTo(50, 0, 75, 25, 75, 75);
            crc2.stroke();
            crc2.fill();
            crc2.restore();
        }
    }
    A10_2_GoldenAutmnPoly.Leaf = Leaf;
})(A10_2_GoldenAutmnPoly || (A10_2_GoldenAutmnPoly = {}));
//# sourceMappingURL=Leaf.js.map