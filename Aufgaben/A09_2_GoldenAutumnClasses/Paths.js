"use strict";
var A09_2_AutumnClasses;
(function (A09_2_AutumnClasses) {
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
    A09_2_AutumnClasses.drawLeaf = drawLeaf;
    function drawRoundLeaf() {
        crc2.beginPath();
        crc2.moveTo(0, 5);
        crc2.bezierCurveTo(125, -50, 25, -150, 0, -200);
        crc2.bezierCurveTo(-25, -150, -125, -50, 0, 5);
        crc2.closePath();
        crc2.fill();
    }
    A09_2_AutumnClasses.drawRoundLeaf = drawRoundLeaf;
    function drawSquirrel() {
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.arc(5, 5, 5, 0, Math.PI * 2);
    }
    A09_2_AutumnClasses.drawSquirrel = drawSquirrel;
})(A09_2_AutumnClasses || (A09_2_AutumnClasses = {}));
//# sourceMappingURL=Paths.js.map