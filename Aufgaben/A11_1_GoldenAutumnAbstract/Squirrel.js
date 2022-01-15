"use strict";
var A11_1_GoldenAutmnAbstract;
(function (A11_1_GoldenAutmnAbstract) {
    class Squirrel extends A11_1_GoldenAutmnAbstract.Drawable {
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
            console.log("draw squirrel");
            //Eichhörnchen von Tini
            crc2.fillStyle = "#B47D49";
            crc2.resetTransform();
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            // body
            crc2.beginPath();
            crc2.ellipse(30, 70, 20, 40, 0, 10, 20);
            crc2.closePath();
            crc2.fill();
            // arm1
            crc2.beginPath();
            crc2.ellipse(3, 40, 8, 18, 15, 10, 20);
            crc2.closePath();
            crc2.fill();
            // arm2
            crc2.beginPath();
            crc2.ellipse(2, 55, 8, 18, 17, 10, 20);
            crc2.closePath();
            crc2.fill();
            // leg1
            crc2.beginPath();
            crc2.ellipse(3, 90, 8, 18, 20, 10, 20);
            crc2.closePath();
            crc2.fill();
            // leg2
            crc2.beginPath();
            crc2.ellipse(7, 105, 8, 20, 20, 10, 20);
            crc2.closePath();
            crc2.fill();
            // tail
            crc2.beginPath();
            crc2.ellipse(50, 80, 10, 30, 10, 10, 20);
            crc2.closePath();
            crc2.fill();
            // head
            let rHead = 17;
            crc2.beginPath();
            crc2.arc(28, 20, rHead, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            // ear1
            crc2.beginPath();
            crc2.ellipse(34, 5, 7, 15, 10, 10, 20);
            crc2.closePath();
            crc2.fill();
            // ear2
            crc2.beginPath();
            crc2.ellipse(30, 5, 7, 15, 9, 10, 20);
            crc2.closePath();
            crc2.fill();
            // eye
            let rEye = 2;
            crc2.beginPath();
            crc2.arc(25, 14, rEye, 0, 2 * Math.PI);
            crc2.lineWidth = 2;
            crc2.closePath();
            crc2.fillStyle = "#000000";
            crc2.fill();
            crc2.restore();
        }
        move() {
            this.position.x -= 2;
            // this.position.y = 400;
            if (this.position.x <= -80) {
                this.position.x = this.canvasWidth;
            }
        }
    }
    A11_1_GoldenAutmnAbstract.Squirrel = Squirrel;
})(A11_1_GoldenAutmnAbstract || (A11_1_GoldenAutmnAbstract = {}));
//# sourceMappingURL=Squirrel.js.map