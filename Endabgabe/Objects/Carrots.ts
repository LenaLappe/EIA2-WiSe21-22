namespace Gemuesegarten {

    export class Carrots extends Vegetable {
        static informationInstance: Carrots = new Carrots(null);

        constructor(_uiField: Fields | null) {
            super(_uiField,
                  "carrot",
                  90000,
                  2,
                  6,
                  2,
                  4,
                  12,
                //   10,
                  7
      );
        }

        onClick(): void {

        alert("on click Carrots");
        }

    }
}