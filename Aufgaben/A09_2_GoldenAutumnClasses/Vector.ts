namespace A09_2_AutumnClasses {

    export class Vector {
        x: number;
        y: number;

        constructor(_x: number, _y: number) {
            console.log("constructor");
            this.x = _x;
            this.y = _y;
        }

        set(_x: number, _y: number): void  {
            console.log("set");
        }

        scale(_factor: number): void {
            console.log("scale");
        }

        add(_addend: Vector): void {
            console.log("add");
        }
    }
    
}