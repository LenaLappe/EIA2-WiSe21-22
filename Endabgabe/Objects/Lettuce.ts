namespace Gemuesegarten {

    export class Lettuce extends Vegetable {
        static informationInstance: Lettuce = new Lettuce(null);

        constructor(_uiField: Fields | null) {
            super(_uiField,
                  "lettuce",
                  60000,
                  3,
                  5,
                  1,
                  2,
                  9,
                //   10,
                  2
             );
        }

        onClick(): void {

        alert("on click Lettuce");
        }

    }
}