namespace A11_1_GoldenAutmnAbstract {

    export abstract class Drawable {
        position: Vector;

        constructor() {
            this.position = new Vector(0, 0);
        }

        public abstract draw(crc2: CanvasRenderingContext2D): void;
    }
}