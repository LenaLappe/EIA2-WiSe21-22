"use strict";
var A08_2_GoldenAutumn;
(function (A08_2_GoldenAutumn) {
    //Entschuldigung, es ist super chaotisch
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
        drawSun({ x: 150, y: 255 });
        drawCloud({ x: 500, y: 125 }, { x: 250, y: 75 });
        drawMountains({ x: 0, y: horizon }, 50, 150, "grey", "lightgrey");
        for (let index = 0; index < 8; index++) {
            drawTree1({ x: Math.random() * 800, y: Math.random() * 220 }, { x: 100, y: 100 });
        }
        for (let index = 0; index < 20; index++) {
            drawTree2({ x: Math.random() * 800, y: Math.random() * 200 });
        }
        // drawTree3();
        // drawLeaf1();
        // drawLeaf2();
        // drawSquirrel();
        // drawAcorn();
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
    function drawSun(_position) {
        console.log("Sun", _position);
        let r1 = 20;
        let r2 = 120;
        let gradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(40, 100%, 85%, 1)");
        gradient.addColorStop(1, "HSLA(40, 100%, 50%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }
    function drawCloud(_position, _size) {
        console.log("Cloud", _position, _size);
        let nParticles = 50;
        let radiusParticle = 50;
        let particle = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(1, 100%, 100%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        console.log("hier");
        crc2.restore();
    }
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        console.log("mountains" + _position);
        let stepMin = 90;
        let stepMax = 180;
        let x = 0;
        crc2.save();
        crc2.translate(_position.x, _position.y);
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
    function drawTree1(_position, _size) {
        console.log("Tree1");
        let position = crc2.canvas.height * golden;
        for (let index = 0; index < 80; index++) {
            let randomNumberX = Math.floor(Math.random() * 800);
            let randomNumberY = Math.floor(Math.random() * 550);
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
                let x = (Math.random() - 0.5) * _size.x;
                let y = -(Math.random() * _size.y);
                crc2.translate(x, y);
                crc2.fill(particle);
                crc2.restore();
            }
        }
    }
    //Funktion von Tini, soll eigentlich nur zum ausprobieren dienen, aber es funktioniert nicht so wie ich will
    function drawTree2(_position) {
        crc2.resetTransform();
        crc2.save();
        crc2.translate(_position.x, golden);
        crc2.beginPath();
        crc2.moveTo(100, 330);
        crc2.lineTo(100, 330);
        crc2.lineTo(80, 330);
        crc2.lineTo(80, 280);
        crc2.lineTo(100, 280);
        crc2.fillStyle = "#45311D";
        crc2.lineWidth = 1;
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.moveTo(80, 280);
        crc2.lineTo(80, 280);
        crc2.lineTo(20, 280);
        crc2.lineTo(60, 245);
        crc2.lineTo(30, 245);
        crc2.lineTo(60, 215);
        crc2.lineTo(45, 215);
        crc2.lineTo(90, 175); //Spitze
        crc2.lineTo(125, 215);
        crc2.lineTo(110, 215);
        crc2.lineTo(150, 245);
        crc2.lineTo(120, 245);
        crc2.lineTo(170, 280);
        crc2.lineTo(80, 280);
        crc2.fillStyle = "#1F320B";
        crc2.fill();
        crc2.closePath();
        crc2.restore();
    }
})(A08_2_GoldenAutumn || (A08_2_GoldenAutumn = {}));
// let position = crc2.canvas.height * golden;
// for (let index: number = 0; index < 5; index++) {
//     let randomNumberX: number = Math.floor(Math.random() * 800);
//     let randomNumberY: number = Math.floor(Math.random() * 400); 
//     // crc2.resetTransform();
//     // crc2.save();
//     // crc2.translate(_position.x, _position.y);
//     // crc2.beginPath();
//     // crc2.moveTo(randomNumberX, randomNumberY);
//     // crc2.lineTo(randomNumberX + 20, randomNumberY);
//     // crc2.lineTo(randomNumberX + 20, randomNumberY + 30);
//     // crc2.lineTo(randomNumberX, randomNumberY + 30);
//     // crc2.fillStyle = "#45311D";
//     // crc2.lineWidth = 1;
//     // crc2.fill();
//     // crc2.closePath();
//     // crc2.beginPath();
//     // crc2.moveTo(randomNumberX, randomNumberY);
//     // crc2.lineTo(randomNumberX - 60, randomNumberY);
//     // crc2.lineTo(randomNumberX - 20, randomNumberY - 45);
//     // crc2.lineTo(randomNumberX - 50, randomNumberY - 45);
//     // crc2.lineTo(randomNumberX - 20, randomNumberY - 65);
//     // crc2.lineTo(randomNumberX - 35, randomNumberY - 65);
//     // crc2.lineTo(randomNumberX + 10, randomNumberY - 95); //Spitze
//     // crc2.lineTo(randomNumberX + 55, randomNumberY - 65);
//     // crc2.lineTo(randomNumberX + 40, randomNumberY - 65);
//     // crc2.lineTo(randomNumberX + 70, randomNumberY - 45);
//     // crc2.lineTo(randomNumberX + 40, randomNumberY - 45);
//     // crc2.lineTo(randomNumberX + 90, randomNumberY);
//     // crc2.lineTo(randomNumberX, randomNumberY);
//     // crc2.fillStyle = "#1F320B";
//     // crc2.fill();
//     // crc2.closePath();
//     // crc2.restore();
// }
//# sourceMappingURL=exercise08_2.js.map