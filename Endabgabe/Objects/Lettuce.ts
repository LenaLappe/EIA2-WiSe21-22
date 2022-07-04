namespace Gemuesegarten {

    export class Lettuce extends Vegetable {
        constructor(_uiField: Fields) {
            super(_uiField,
                  "lettuce",
                  1000,
                  0.3,
                  5,
                  0.09,
                  1,
                  10,
                  10,
                  10,
                  10
             );
        }

        onClick(): void {

        alert("on click Lettuce");
        }

    }
}