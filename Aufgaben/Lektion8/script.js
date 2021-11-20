"use strict";
var canvas;
(function (canvas_1) {
    let crc2;
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        console.log(canvas);
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        for (let index = 0; index < 100; index++) {
            let randomNumberX = Math.floor(Math.random() * 400);
            let randomNumberY = Math.floor(Math.random() * 300);
            draw(randomNumberX, randomNumberY);
        }
        function draw(_randomNumberX, _randomNumberY) {
            crc2.beginPath();
            crc2.moveTo(_randomNumberX, _randomNumberY);
            crc2.lineTo(_randomNumberX, _randomNumberY + 70);
            crc2.lineTo(_randomNumberX + 80, _randomNumberY + 35);
            crc2.closePath();
            crc2.fillStyle = "#ff0000";
            crc2.strokeStyle = "blue";
            crc2.lineWidth = 5;
            crc2.stroke();
            crc2.fill();
        }
    }
})(canvas || (canvas = {}));
//# sourceMappingURL=script.js.map