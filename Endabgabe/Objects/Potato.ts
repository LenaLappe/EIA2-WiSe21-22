namespace Gemuesegarten {

    export class Potato extends Vegetable {
        constructor(_uiField: Fields) {
            super(_uiField,
                  "potato",
                  9000,
                  0.5,
                  10,
                  0.05,
                  5, 
                  10,
                  10,
                  10,
                  10
            );
        }

        onClick(): void {

        alert("on click Potato");
        }

    }
}