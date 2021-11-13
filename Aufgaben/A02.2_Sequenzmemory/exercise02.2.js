"use strict";
var A2_2_Sequenzmemory_Amélie;
(function (A2_2_Sequenzmemory_Amélie) {
    let gameOn = false;
    let word;
    let prepTime = 5;
    let gameTime = 60;
    let sequenz;
    let timer;
    let wrongFeedback;
    let correctFeedback;
    window.addEventListener("load", prepareGame);
    function prepareGame(_event) {
        sequenz = prompt["enter a word"];
        createGameScreen();
    }
    function createGameScreen() {
        let gameboard;
        gameboard = document.createElement("div");
        document.createAttribute("id");
    }
})(A2_2_Sequenzmemory_Amélie || (A2_2_Sequenzmemory_Amélie = {}));
//# sourceMappingURL=exercise02.2.js.map