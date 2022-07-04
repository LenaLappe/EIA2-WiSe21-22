"use strict";
var Gemuesegarten;
(function (Gemuesegarten) {
    //Variablen deklarieren
    let board = 39;
    let gameboard;
    // let startButton: HTMLElement = document.querySelector("#startButton")!;
    let gameContainer;
    let fieldArray = [];
    window.onload = drawField;
    function drawField() {
        gameContainer = document.querySelector(".gameContainer");
        //nach jedem durchlauf Container leeren, sonst generieren sich immer neue divs
        gameContainer.innerHTML = "";
        console.log("1. Hallo");
        //Spielfeld mit 40 divs erstellen
        for (let i = 0; i <= board; i++) {
            gameboard = document.createElement("div");
            gameboard.classList.add("field");
            fieldArray[i] = new Gemuesegarten.Fields(gameboard);
            let idField = document.createAttribute("id");
            idField.value = i.toString();
            gameContainer.appendChild(gameboard);
            gameboard.setAttributeNode(idField);
            console.log(i);
            gameboard.addEventListener("click", function () { fieldArray[i].onClick(); });
        }
        console.log("hallo");
    }
})(Gemuesegarten || (Gemuesegarten = {}));
//# sourceMappingURL=Main.js.map