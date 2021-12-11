namespace A09_2_AutumnClasses {

    //Großteil aus meinem alten Code, aus Jirkas Videos und von Amélie

    window.addEventListener("load", handleLoad);
    let crc2: CanvasRenderingContext2D;
    let golden: number = 0.5;
    let background: ImageData;

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");

        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        createPaths();
        drawBackground();
        background = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
        window.setInterval(update, 50);

    }

    function drawBackground(): void {
        console.log("Background");

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);

        gradient.addColorStop(0, "HSL(199, 50%, 70%)");
        gradient.addColorStop(0.4 , "HSL(30, 50%, 60%)");
        gradient.addColorStop(0.7 , "HSL(60, 100%, 40%)");
        gradient.addColorStop(1, "HSL(95, 80%, 30%)");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        let horizon: number = crc2.canvas.height * golden;

        drawMountains(0, horizon, 50, 150, "grey", "lightgrey");
        drawTrees(100, 110, -horizon);
    }

    function update(): void {
        crc2.putImageData(background, 0, 0);
        drawSquirrel();
        drawLeaf();
    }

    function drawMountains(_x: number, _y: number, _min: number, _max: number, _colorLow: string, _colorHigh: string): void {
        console.log("mountains" + _y);

        let stepMin: number = 90;
        let stepMax: number = 180;
        let x: number = 0;

        crc2.save();
        crc2.translate(_x, _y);

        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);

        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y: number = -_min - Math.random() * (_max - _min);

            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);

        crc2.lineTo(x, 0);
        crc2.closePath();

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, - _max);

        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.8, _colorHigh);

        crc2.fillStyle = gradient;
        crc2.fill();

        crc2.restore();
    }

    function drawTrees (_x: number, _y: number, sky: number): void {
        for (let index: number = 0; index < 80; index++) {

            let randomNumberX: number = Math.floor(Math.random() * 800);
            let randomNumberY: number = Math.floor(Math.random() * 600) - sky; 

            crc2.beginPath();
            crc2.moveTo(randomNumberX, randomNumberY);
            crc2.lineTo(randomNumberX + 20, randomNumberY);
            crc2.lineTo(randomNumberX + 20, randomNumberY + 50);
            crc2.lineTo(randomNumberX, randomNumberY + 50);
            crc2.fillStyle = "#45311D";
            crc2.lineWidth = 1;
            crc2.closePath();
            crc2.fill();
                
        

            let nParticles: number = 70;
            let radiusParticle: number = 20;
            let particle: Path2D = new Path2D();
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);

            gradient.addColorStop(0, "#446C31");
            gradient.addColorStop(1, "#447C31");

            crc2.save();
            crc2.translate(randomNumberX + 10, randomNumberY);

            crc2.fillStyle = gradient;

            for (let drawn: number = 0; drawn < nParticles; drawn++) {
                crc2.save();
                let x: number = (Math.random() - 0.5) * _x;
                let y: number = -(Math.random() * _y);
                crc2.translate(x, y);
                crc2.fill(particle);
                crc2.restore();
            }
        } 
    }

    
}