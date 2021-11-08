var A2_2_Sequenzmemory_Amélie;
(function (A2_2_Sequenzmemory_Amélie) {
    var gameOn = false;
    var word;
    var prepTime = 5;
    var gameTime = 60;
    var sequenz;
    var timer;
    var wrongFeedback;
    var correctFeedback;
    window.addEventListener("load", prepareGame);
    function prepareGame(_event) {
        sequenz = prompt["enter a word"];
        createGameScreen();
    }
    function createGameScreen() {
        var gameboard;
        gameboard = document.createElement("div");
        document.createAttribute("id");
    }
})(A2_2_Sequenzmemory_Amélie || (A2_2_Sequenzmemory_Amélie = {}));
//# sourceMappingURL=exercise02.2.js.map