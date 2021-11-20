"use strict";
var A08_1_generativeArt;
(function (A08_1_generativeArt) {
    let crc2;
    let hue;
    let saturation;
    let lightness;
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        console.log(canvas);
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        let gradient = crc2.createLinearGradient(100, 200, 250, 500);
        hue = Math.round(Math.random() * 400);
        let hue1 = Math.round(Math.random() * 300);
        let hue2 = Math.round(Math.random() * 100);
        gradient.addColorStop(0, "hsl(" + hue + "," + "60%, " + "70%" + ")");
        gradient.addColorStop(.5, "hsl(" + hue1 + "," + "60%, " + "70%" + ")");
        gradient.addColorStop(1, "hsl(" + hue2 + "," + "60%, " + "70%" + ")");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, 2000, 1000);
        for (let index = 0; index < 20; index++) {
            let randomNumberX = Math.floor(Math.random() * 800);
            let randomNumberY = Math.floor(Math.random() * 600);
            drawTriangle(randomNumberX, randomNumberY);
            drawCircle(randomNumberX, randomNumberY);
            drawBubble(randomNumberX, randomNumberY);
        }
    }
    function drawTriangle(_randomNumberX, _randomNumberY) {
        hue = Math.round(Math.random() * 300);
        saturation = Math.round(Math.random() * 80);
        lightness = Math.round(Math.random() * 70);
        crc2.beginPath();
        crc2.moveTo(_randomNumberX, _randomNumberY);
        crc2.lineTo(_randomNumberX, _randomNumberY + 70);
        crc2.lineTo(_randomNumberX + 120, _randomNumberY + 15);
        crc2.closePath();
        crc2.strokeStyle = "hsl(" + hue + "," + saturation + "% , " + lightness + "%" + ")";
        crc2.lineWidth = 3;
        crc2.stroke();
    }
    function drawCircle(_randomNumberX, _randomNumberY) {
        hue = Math.round(Math.random() * 50);
        saturation = Math.round(Math.random() * 80);
        lightness = Math.round(Math.random() * 100);
        let radius = Math.round(Math.random() * 60);
        _randomNumberX = Math.random() * 800;
        _randomNumberX = Math.random() * 600;
        crc2.beginPath();
        crc2.arc(_randomNumberX, _randomNumberY, radius, 0, Math.PI * 2);
        crc2.fillStyle = "hsl(" + hue + "," + saturation + "% , " + lightness + "%" + ")";
        crc2.fill();
        crc2.closePath();
    }
    function drawBubble(_randomNumberX, _randomNumberY) {
        hue = Math.round(Math.random() * 500);
        saturation = Math.round(Math.random() * 90);
        lightness = Math.round(Math.random() * 100);
        let radius = Math.floor(Math.random() * 60);
        _randomNumberX = Math.random() * 800;
        _randomNumberX = Math.random() * 600;
        crc2.beginPath();
        crc2.arc(_randomNumberX, _randomNumberY, radius, 0, Math.PI * 2);
        crc2.strokeStyle = "hsl(" + hue + "," + saturation + "% , " + lightness + "%" + ")";
        crc2.lineWidth = 1.5;
        crc2.stroke();
        crc2.closePath();
    }
})(A08_1_generativeArt || (A08_1_generativeArt = {}));
//# sourceMappingURL=exercise08.js.map