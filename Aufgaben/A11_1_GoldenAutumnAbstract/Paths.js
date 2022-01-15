"use strict";
var A11_1_GoldenAutmnAbstract;
(function (A11_1_GoldenAutmnAbstract) {
    let crc2;
    function drawLeaf(_type, _gradient) {
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(-10, 100);
        crc2.lineTo(10, 100);
        crc2.closePath();
        crc2.fillStyle = "hsl(25, 35%, 25%)";
        crc2.fill();
        crc2.fillStyle = _gradient;
        drawRoundLeaf();
    }
    A11_1_GoldenAutmnAbstract.drawLeaf = drawLeaf;
    function drawRoundLeaf() {
        crc2.beginPath();
        crc2.moveTo(0, 5);
        crc2.bezierCurveTo(125, -50, 25, -150, 0, -200);
        crc2.bezierCurveTo(-25, -150, -125, -50, 0, 5);
        crc2.closePath();
        crc2.fill();
    }
    A11_1_GoldenAutmnAbstract.drawRoundLeaf = drawRoundLeaf;
    function drawSquirrel() {
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.arc(5, 5, 5, 0, Math.PI * 2);
    }
    A11_1_GoldenAutmnAbstract.drawSquirrel = drawSquirrel;
})(A11_1_GoldenAutmnAbstract || (A11_1_GoldenAutmnAbstract = {}));
//# sourceMappingURL=Paths.js.map