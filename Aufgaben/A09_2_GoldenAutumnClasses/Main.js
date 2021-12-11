"use strict";
var A09_2_AutumnClasses;
(function (A09_2_AutumnClasses) {
    window.addEventListener("load", handleLoad);
    let crc2;
    let golden = 0.5;
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        let horizon = crc2.canvas.height * golden;
        drawBackground();
        drawMountains(0, horizon, 50, 150, "grey", "lightgrey");
        drawTrees(100, 110, -horizon);
    }
    function drawBackground() {
        console.log("Background");
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "HSL(199, 50%, 70%)");
        gradient.addColorStop(0.4, "HSL(30, 50%, 60%)");
        gradient.addColorStop(0.7, "HSL(60, 100%, 40%)");
        gradient.addColorStop(1, "HSL(95, 80%, 30%)");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    function drawMountains(_x, _y, _min, _max, _colorLow, _colorHigh) {
        console.log("mountains" + _y);
        let stepMin = 90;
        let stepMax = 180;
        let x = 0;
        crc2.save();
        crc2.translate(_x, _y);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);
        crc2.lineTo(x, 0);
        crc2.closePath();
        let gradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.8, _colorHigh);
        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.restore();
    }
    function drawTrees(_x, _y, sky) {
        for (let index = 0; index < 80; index++) {
            let randomNumberX = Math.floor(Math.random() * 800);
            let randomNumberY = Math.floor(Math.random() * 600) - sky;
            crc2.beginPath();
            crc2.moveTo(randomNumberX, randomNumberY);
            crc2.lineTo(randomNumberX + 20, randomNumberY);
            crc2.lineTo(randomNumberX + 20, randomNumberY + 50);
            crc2.lineTo(randomNumberX, randomNumberY + 50);
            crc2.fillStyle = "#45311D";
            crc2.lineWidth = 1;
            crc2.closePath();
            crc2.fill();
            let nParticles = 70;
            let radiusParticle = 20;
            let particle = new Path2D();
            let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "#446C31");
            gradient.addColorStop(1, "#447C31");
            crc2.save();
            crc2.translate(randomNumberX + 10, randomNumberY);
            crc2.fillStyle = gradient;
            for (let drawn = 0; drawn < nParticles; drawn++) {
                crc2.save();
                let x = (Math.random() - 0.5) * _x;
                let y = -(Math.random() * _y);
                crc2.translate(x, y);
                crc2.fill(particle);
                crc2.restore();
            }
        }
    }
})(A09_2_AutumnClasses || (A09_2_AutumnClasses = {}));
//# sourceMappingURL=Main.js.map