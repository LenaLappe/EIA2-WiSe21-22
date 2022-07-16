namespace Gemuesegarten {

    export class Potato extends Vegetable {
        static informationInstance: Potato = new Potato(null);

        constructor(_uiField: Fields | null) {
            super(_uiField,
                  "potato",
                  10000,
                  1,
                  3,
                  1, 
                  2,
                  10,
                //   10,
                  4
            );
        }

        onClick(): void {

        alert("on click Potato");
        }

    }
}