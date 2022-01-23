namespace A11_1_GoldenAutmnAbstract {

    export class Leaf extends Drawable implements Movable {
        static forward: boolean = true;
        static baseSpeed: number = 2;
        size: number;
        canvasWidth: number;
        canvasHeight: number;


        constructor(_canvasWidth: number, _canvasHeight: number) {
            super();
            this.canvasWidth = _canvasWidth;
            this.canvasHeight = _canvasHeight;
            const x: number = Math.floor(Math.random() * _canvasWidth);
            const y: number = Math.floor(Math.random() * _canvasHeight); 
            this.position = new Vector (x, y);
        }

        public static getDirection(): number {
            //if und If else Abfrage in einer Zeile
            return Leaf.forward ? 1 : -1;
        }

        public static getXSpeed(): number {
            return Leaf.baseSpeed * Leaf.getDirection();
        }

        public static getSpawn(): number {
            return Cloud.getDirection();
        }

        public move(): void {
            console.log("move leaf");

            this.position.x += Leaf.getXSpeed();
            this.position.y += Leaf.baseSpeed;

            if (Leaf.forward && this.position.x >= this.canvasWidth) {
                this.position.x = 0;
            } else if (!Leaf.forward && this.position.x < 0) {
                this.position.x = this.canvasWidth;
            }

            if (this.position.y >= this.canvasHeight) {
                this.position.y = 0; 
            } 
        }

        public draw(crc2: CanvasRenderingContext2D): void { 
            //Blatt von David
            
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            
            crc2.beginPath();
            crc2.lineWidth = 2;
            crc2.strokeStyle = "black";
            crc2.moveTo(0, 0);
            crc2.lineTo(25, 25);
            crc2.stroke();
            crc2.fillStyle = "#ab2b2b";
            crc2.moveTo(25, 25);
            crc2.bezierCurveTo(0, 50, 25, 75, 75, 75);
            crc2.moveTo(25, 25);
            crc2.bezierCurveTo(50, 0, 75, 25, 75, 75);
            crc2.stroke();
            crc2.fill();

            crc2.restore();
        }
    }
    
}