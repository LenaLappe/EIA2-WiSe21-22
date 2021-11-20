namespace canvas {

    let crc2: CanvasRenderingContext2D;

    window.addEventListener("load", handleLoad);

    function handleLoad (_event: Event): void {
        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
        console.log(canvas);

        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        console.log(crc2);

        for (let index: number = 0; index < 100; index++) {

            let randomNumberX: number = Math.floor(Math.random() * 400);
            let randomNumberY: number = Math.floor(Math.random() * 300);

            draw(randomNumberX, randomNumberY);

            
        }

        function draw (_randomNumberX: number, _randomNumberY: number): void {

            crc2.beginPath();
            crc2.moveTo(_randomNumberX, _randomNumberY);
            crc2.lineTo(_randomNumberX, _randomNumberY + 70);
            crc2.lineTo(_randomNumberX + 80, _randomNumberY + 35);
            crc2.closePath();
    
            crc2.fillStyle = "#ff0000";
            crc2.strokeStyle = "blue";
            crc2.lineWidth = 5;
            crc2.stroke();
            crc2.fill(); 

        }

        
        

        
    }
}