"use strict";
var A11_1_GoldenAutmnAbstract;
(function (A11_1_GoldenAutmnAbstract) {
    //Großteil aus meinem alten Code, aus Jirkas Videos und von Amélie
    window.addEventListener("load", handleLoad);
    let crc2;
    let golden = 0.5;
    let background;
    let nut = [new A11_1_GoldenAutmnAbstract.Acorn(800, 300, 300)];
    const drawables = [
        new A11_1_GoldenAutmnAbstract.Cloud(800),
        new A11_1_GoldenAutmnAbstract.Squirrel(800, 300, 300),
        new A11_1_GoldenAutmnAbstract.Squirrel(800, 300, 300),
        new A11_1_GoldenAutmnAbstract.Squirrel(800, 300, 300),
        new A11_1_GoldenAutmnAbstract.Leaf(800, 600),
        new A11_1_GoldenAutmnAbstract.Leaf(800, 600),
        new A11_1_GoldenAutmnAbstract.Leaf(800, 600)
    ];
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        // createPaths();
        drawBackground();
        background = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
        window.setInterval(update, 50);
        // window.addEventListener("click",);
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
        let horizon = crc2.canvas.height * golden;
        drawMountains(0, horizon, 50, 150, "grey", "lightgrey");
        drawTrees(800, 300, 300);
        background = crc2.getImageData(0, 0, 800, 600);
    }
    function update() {
        crc2.putImageData(background, 0, 0);
        for (let drawable of drawables) {
            drawable.move();
            drawable.draw(crc2);
        }
        // drawSquirrel();
        // drawLeaf();
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
    function drawTrees(width, height, yoffset) {
        for (let index = 0; index < 10; index++) {
            const x = Math.floor(Math.random() * width);
            // const y: number = Math.floor(Math.random() * height) + yoffset; 
            drawSpruceTree(x);
        }
        for (let index = 0; index < 10; index++) {
            const x = Math.floor(Math.random() * width);
            const y = Math.floor(Math.random() * height) + yoffset;
            drawLeafTree(x, y);
        }
    }
    function drawLeafTree(x, y) {
        const stumpWidth = 20;
        const stumpHeight = 100;
        crc2.save();
        crc2.translate(x, y);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(stumpWidth, 0);
        crc2.lineTo(stumpWidth, -stumpHeight);
        crc2.lineTo(0, -stumpHeight);
        crc2.fillStyle = "#45311D";
        crc2.lineWidth = 1;
        crc2.closePath();
        crc2.fill();
        let nParticles = 50;
        let radiusParticle = 20;
        let particle = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "#446C31");
        gradient.addColorStop(1, "#447C31");
        crc2.fillStyle = gradient;
        crc2.translate(stumpWidth / 2, -stumpHeight);
        for (let drawn = 0; drawn < nParticles; drawn++) {
            crc2.save();
            // punk in kreis generieren
            // https://stackoverflow.com/questions/5837572/generate-a-random-point-within-a-circle-uniformly
            const r = 40 * Math.sqrt(Math.random());
            const theta = Math.random() * 2 * Math.PI;
            const rndX = r * Math.cos(theta);
            const rndY = r * Math.sin(theta);
            crc2.translate(rndX, rndY);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
    function drawSpruceTree(x) {
        crc2.save();
        crc2.translate(x, golden);
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
})(A11_1_GoldenAutmnAbstract || (A11_1_GoldenAutmnAbstract = {}));
//# sourceMappingURL=Main.js.map