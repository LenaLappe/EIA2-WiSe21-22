namespace A09_2_AutumnClasses {

    export class Leaf {
        position: Vector;
        speed: Vector;
        size: number;
        type: number;

        constructor(_size: number) {
            console.log("constructor leaf");
        }

        move(_timeslice: number): void {
            console.log("move leaf");
        }

        draw(): void {
            console.log("draw leaf");
        }
    }
    
}