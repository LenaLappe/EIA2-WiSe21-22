"use strict";
var A10_2_GoldenAutmnPoly;
(function (A10_2_GoldenAutmnPoly) {
    class Cloud extends A10_2_GoldenAutmnPoly.Drawable {
        constructor(_canvasWidth) {
            super();
            this.size = new A10_2_GoldenAutmnPoly.Vector(250, 75);
            this.position = new A10_2_GoldenAutmnPoly.Vector(-150, 100);
            this.canvasWidth = _canvasWidth;
            this.particlePositions = [];
            const nParticles = 50;
            for (let i = 0; i < nParticles; i++) {
                let x = (Math.random() - 0.5) * this.size.x;
                let y = -(Math.random() * this.size.y);
                this.particlePositions.push(new A10_2_GoldenAutmnPoly.Vector(x, y));
            }
        }
        draw(crc2) {
            this.drawCloud(crc2);
        }
        move() {
            this.position.x += 5;
            if (this.position.x >= this.canvasWidth + 150) {
                this.position.x = -150;
            }
        }
        drawCloud(crc2) {
            crc2.restore();
            console.log("Cloud", this.position, this.size);
            let radiusParticle = 50;
            let particle = new Path2D();
            let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
            gradient.addColorStop(1, "HSLA(1, 100%, 100%, 0)");
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.fillStyle = gradient;
            for (let particlePosition of this.particlePositions) {
                crc2.save();
                crc2.translate(particlePosition.x, particlePosition.y);
                crc2.fill(particle);
                crc2.restore();
            }
            crc2.restore();
        }
    }
    A10_2_GoldenAutmnPoly.Cloud = Cloud;
})(A10_2_GoldenAutmnPoly || (A10_2_GoldenAutmnPoly = {}));
//# sourceMappingURL=Cloud.js.map