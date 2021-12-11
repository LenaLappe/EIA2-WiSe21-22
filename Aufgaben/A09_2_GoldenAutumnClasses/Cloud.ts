namespace A09_2_AutumnClasses {

    export class Cloud {
        position: Vector;
        speed: Vector;
        size: number;
        type: number;

        constructor(_size: number) {
            console.log("constructor Cloud");
        }

        move(_timeslice: number): void {
            console.log("move Cloud");
        }

        draw(): void {
            console.log("draw Cloud");
        }
    }
    
}