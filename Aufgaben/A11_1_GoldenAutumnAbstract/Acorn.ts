namespace A11_1_GoldenAutmnAbstract {

    export class Acorn extends Drawable {
        // position: Vector;
        size: number;
        type: number;
        canvasWidth: number;
        canvasHeight: number;
        offset: number;

        constructor(_canvasWidth: number, _canvasHeight: number, _offset: number) {
            super();
            this.canvasWidth = _canvasWidth;
            this.canvasHeight = _canvasHeight;
            this.offset = _offset;
            const x: number = Math.floor(Math.random() * _canvasWidth);
            const y: number = Math.floor(Math.random() * _canvasHeight) + _offset; 
            this.position = new Vector (x, y);
        }

        public draw(crc2: CanvasRenderingContext2D): void {
            crc2.save();
            crc2.translate(this.position.x, this.position.y);

            crc2.beginPath();
            crc2.ellipse(34, 5, 7, 15, 10, 10, 20);
            crc2.closePath();
            crc2.fillStyle = "brown";
            crc2.fill();

            crc2.restore();
        }
    }
}