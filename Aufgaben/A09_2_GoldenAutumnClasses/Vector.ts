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
            this.x = _x;
            this.y = _y;
            
        }

        scale(_factor: number): void {
            console.log("scale");
            this.x *= _factor;
            this.y *= _factor;
        }

        add(_addend: Vector): void {
            console.log("add");
            this.x += _addend.x;
            this.y += _addend.y;
        }
    }
    
}