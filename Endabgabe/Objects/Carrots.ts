namespace Gemuesegarten {

    export class Carrots extends Vegetable {
        constructor(_uiField: Fields) {
            super(_uiField,
                  "carrot",
                  90000,
                  0.5,
                  6,
                  0.1,
                  2,
                  10,
                  10,
                  10,
                  10
      );
        }

        onClick(): void {

        alert("on click Carrots");
        }

    }
}