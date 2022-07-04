namespace Gemuesegarten {

    export class Tomato extends Vegetable {
        constructor(_uiField: Fields) {
            super(_uiField,
                  "tomato",
                  10000,
                  0.3,
                  7,
                  0.1,
                  1,
                  10,
                  10,
                  10,
                  10
            );
        }

        onClick(): void {

        alert("on click Tomato");
        }



    }
}