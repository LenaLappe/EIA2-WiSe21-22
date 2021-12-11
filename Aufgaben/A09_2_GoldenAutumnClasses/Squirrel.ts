namespace A09_2_AutumnClasses {

    export class Squirrel {
        position: Vector;
        size: number;
        type: number;

        constructor(_size: number) {
            console.log("constructor Squirrel");
        }

        draw(): void {
            console.log("draw squirrel");
        }
    }

}