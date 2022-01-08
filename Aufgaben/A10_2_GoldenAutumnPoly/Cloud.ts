namespace A10_2_GoldenAutmnPoly {

    export class Cloud extends Drawable implements Movable {
        speed: Vector;
        size: Vector;
        canvasWidth: number;

        // beinhaltet die positionen der einzelne particel der wolke
        particlePositions: Vector[];

        constructor(_canvasWidth: number) {
            super();
            this.size = new Vector(250, 75);
            this.position = new Vector(-150, 100);
            this.canvasWidth = _canvasWidth;

            this.particlePositions = [];
            const nParticles: number = 50;
            for (let i: number = 0; i < nParticles; i++) {
                let x: number = (Math.random() - 0.5) * this.size.x;
                let y: number = - (Math.random() * this.size.y);
                this.particlePositions.push(new Vector(x, y));
            }
        }

        public draw(crc2: CanvasRenderingContext2D): void {

            this.drawCloud(crc2);
        }

        public move(): void {
            this.position.x += 5;

            if (this.position.x >= this.canvasWidth + 150) {
                this.position.x = -150;
            }
        }

        private drawCloud(crc2: CanvasRenderingContext2D): void {
            crc2.restore();

            console.log("Cloud", this.position, this.size);

            let radiusParticle: number = 50;
            let particle: Path2D = new Path2D();
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

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

}