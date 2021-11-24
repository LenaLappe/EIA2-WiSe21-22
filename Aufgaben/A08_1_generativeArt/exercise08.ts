namespace A08_1_generativeArt {

    let crc2: CanvasRenderingContext2D;
    let hue: number;
    let saturation: number;
    let lightness: number;

    window.addEventListener("load", handleLoad);

    function handleLoad (_event: Event): void {
        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
        console.log(canvas);

        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        console.log(crc2);



        let gradient: CanvasGradient = crc2.createLinearGradient(100, 200, 250, 500);
        hue = Math.round(Math.random() * 400);
        let hue1: number = Math.round(Math.random() * 300);
        let hue2: number = Math.round(Math.random() * 100);
        
        gradient.addColorStop(0,  "hsl(" + hue + "," + "60%, " + "70%" + ")");
        gradient.addColorStop(.5,  "hsl(" + hue1 + "," + "60%, " + "70%" + ")");
        gradient.addColorStop(1, "hsl(" + hue2 + "," + "60%, " + "70%" + ")" );

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, 2000, 1000);



        for (let index: number = 0; index < 20; index++) {

            let randomNumberX: number = Math.floor(Math.random() * 800);
            let randomNumberY: number = Math.floor(Math.random() * 600);

            drawTriangle(randomNumberX, randomNumberY);
            drawCircle(randomNumberX, randomNumberY);
            drawBubble(randomNumberX, randomNumberY);
 
        }

    }    


    function drawTriangle (_randomNumberX: number, _randomNumberY: number): void {
        hue = Math.round(Math.random() * 300);
        saturation = Math.round(Math.random() * 80);
        lightness = Math.round(Math.random() * 70);

        crc2.beginPath();
        crc2.moveTo(_randomNumberX, _randomNumberY);
        crc2.lineTo(_randomNumberX, _randomNumberY + 70);
        crc2.lineTo(_randomNumberX + 120, _randomNumberY + 15);
        crc2.closePath();
    
        crc2.strokeStyle =  "hsl(" + hue + "," + saturation + "% , " + lightness + "%" + ")";
        crc2.lineWidth = 3;
        crc2.stroke();
    }

    function drawCircle (_randomNumberX: number, _randomNumberY: number): void {
        hue = Math.round(Math.random() * 50);
        saturation = Math.round(Math.random() * 80);
        lightness = Math.round(Math.random() * 100);

        let radius: number = Math.round(Math.random() * 60);
        _randomNumberX = Math.random() * 800;
        _randomNumberX = Math.random() * 600;

        crc2.beginPath();
        crc2.arc(_randomNumberX, _randomNumberY, radius, 0, Math.PI * 2);
        crc2.fillStyle = "hsl(" + hue + "," + saturation + "% , " + lightness + "%" + ")";
        crc2.fill();
        crc2.closePath();

       
    }

    function drawBubble (_randomNumberX: number, _randomNumberY: number): void {
        hue = Math.round(Math.random() * 500);
        saturation = Math.round(Math.random() * 90);
        lightness = Math.round(Math.random() * 100);

        let radius: number = Math.floor(Math.random() * 60);
        _randomNumberX = Math.random() * 800;
        _randomNumberX = Math.random() * 600;

        crc2.beginPath();
        crc2.arc(_randomNumberX, _randomNumberY, radius, 0, Math.PI * 2);
        crc2.strokeStyle = "hsl(" + hue + "," + saturation + "% , " + lightness + "%" + ")";
        crc2.lineWidth = 1.5;
        crc2.stroke();
        crc2.closePath();

       
    }

}