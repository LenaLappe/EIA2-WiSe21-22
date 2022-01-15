namespace A11_1_GoldenAutmnAbstract {

    let crc2: CanvasRenderingContext2D;

    export function drawLeaf(_type: number, _gradient: CanvasGradient): void {
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(-10, 100);
        crc2.lineTo(10, 100);
        crc2.closePath();
        crc2.fillStyle = "hsl(25, 35%, 25%)";
        crc2.fill();
        crc2.fillStyle = _gradient;
        drawRoundLeaf();
    }

    export function drawRoundLeaf(): void {
        crc2.beginPath();
        crc2.moveTo(0, 5);
        crc2.bezierCurveTo(125, -50, 25, -150, 0, -200);
        crc2.bezierCurveTo(-25, -150, -125, -50, 0, 5);
        crc2.closePath();
        crc2.fill();
    }

    export function drawSquirrel(): void {
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.arc(5, 5, 5, 0, Math.PI * 2);
    }
}