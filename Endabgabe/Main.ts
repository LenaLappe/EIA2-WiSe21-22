namespace Gemuesegarten {

    //Variablen deklarieren
    let board: number = 39;
    let gameboard: HTMLDivElement;
    // let startButton: HTMLElement = document.querySelector("#startButton")!;
    let gameContainer: HTMLDivElement;
    let fieldArray: Fields[] = [];


    window.onload = drawField;


    function drawField(): void {

        gameContainer = document.querySelector(".gameContainer")!;

        //nach jedem durchlauf Container leeren, sonst generieren sich immer neue divs
        gameContainer.innerHTML = "";

        console.log("1. Hallo");

        //Spielfeld mit 40 divs erstellen
        for (let i: number = 0; i <= board; i++) {

            gameboard = document.createElement("div");
            gameboard.classList.add("field");

            fieldArray[i] = new Fields(gameboard);

            let idField: Attr = document.createAttribute("id");
            idField.value = i.toString();



            gameContainer.appendChild(gameboard);
            gameboard.setAttributeNode(idField);
            console.log(i);

            gameboard.addEventListener("click", function (): void { fieldArray[i].onClick(); });
        }

        console.log("hallo");


    }



}
