namespace Gemuesegarten {

    export class Cucumber extends Vegetable {
        constructor(_uiField: Fields) {
            super(_uiField,
                  "cucumber",
                  400,
                  0.2,
                  9,
                  0.4,
                  5,
                  10,
                  10,
                  10,
                  10
            );
        }

        onClick(): void {

        alert("on click Cucumber");
        }

    }
}