"use strict";
var A03_1_SequenzmemorySettings;
(function (A03_1_SequenzmemorySettings) {
    let word;
    let sequenz;
    let timer;
    let mixed;
    let letter;
    // let inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll("input");
    // let fieldsets: NodeListOf<HTMLFieldSetElement>;
    let formElementSettings;
    let gameField;
    let globalFormData;
    let gameCard;
    let cardsOpened = 0;
    // let body: HTMLElement = document.body;
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        console.log("hallo");
        // let fieldsets: NodeListOf<HTMLFieldSetElement> = document.querySelectorAll("fieldset");
        let form = document.querySelector("div#form");
        form.addEventListener("change", handleChange);
        let startButton = document.querySelector("button#startButton");
        startButton.addEventListener("click", createGamefield);
    }
    function handleChange(_event) {
        let formData = new FormData(document.forms[0]);
        console.log(formData);
        for (let entry of formData) {
            console.log(entry);
            let card = document.querySelector("[value='" + entry[0] + "']");
            console.log(card);
        }
        globalFormData = formData;
    }
    function createGamefield(_event) {
        document.getElementById("formElement").remove();
        gameField = document.createElement("div");
        gameField.classList.add("field");
        let cardHeight = globalFormData.get("card");
        let cardColor = globalFormData.get("cardColor");
        let backgroundColor = globalFormData.get("backgroundColor");
        let fontColor = globalFormData.get("fontColor");
        let fontStyle = globalFormData.get("Radiogroup");
        let timerStepper = parseInt(globalFormData.get("stepper"));
        document.body.setAttribute("style", "background-color:" + backgroundColor + ";");
        gameField.addEventListener("click", handleClickCard);
        document.body.appendChild(gameField);
        let timer = document.createElement("div");
        timer.classList.add("timer");
        timer.innerHTML = "Timer: " + timerStepper.toString();
        gameField.appendChild(timer);
        let selectedWord = globalFormData.get("selectedWord");
        console.log(selectedWord);
        sequenz = new Array(selectedWord.length);
        mixed = new Array(selectedWord.length);
        for (let index = 0; index < selectedWord.length; index++) {
            let letter = selectedWord.charAt(index);
            console.log(letter);
            sequenz[index] = letter;
            mixed[index] = letter;
        }
        console.log(sequenz);
        shuffle(mixed);
        for (let i = 0; i < mixed.length; i++) {
            gameCard = document.createElement("span");
            gameCard.innerHTML = mixed[i];
            let styleString = "";
            styleString += "background-color:";
            styleString += cardColor;
            styleString += ";color:";
            styleString += fontColor;
            styleString += ";font-family:";
            styleString += fontStyle;
            styleString += ";height:";
            styleString += cardHeight;
            styleString += "px";
            styleString += ";width:";
            styleString += cardHeight;
            styleString += "px";
            styleString += ";font-size:";
            styleString += parseInt(cardHeight) * 0.9;
            styleString += "px;";
            gameCard.setAttribute("style", styleString);
            gameCard.setAttribute("id", i.toString());
            gameField.appendChild(gameCard);
        }
        setTimeout(function () {
            console.log("Waited");
            let allGameCards = document.getElementsByTagName("span");
            for (let index = 0; index < allGameCards.length; index++) {
                allGameCards.item(index).innerHTML = "";
            }
            setInterval(function () {
                timerStepper--;
                timer.innerHTML = "Timer: " + timerStepper.toString();
                if (timerStepper == 0) {
                    finishGame(false);
                }
            }, 1000);
        }, 2000);
    }
    function handleClickCard(_event) {
        let clickedCard = _event.target;
        let clickedCardID = parseInt(clickedCard.getAttribute("id"));
        clickedCard.innerHTML = mixed[clickedCardID];
        if (sequenz[cardsOpened] == mixed[clickedCardID]) {
            if (cardsOpened == sequenz.length - 1) {
                finishGame(true);
            }
        }
        else {
            finishGame(false);
        }
        cardsOpened++;
    }
    function finishGame(feedback) {
        let alertText;
        if (feedback) {
            alertText = "du hast gewonnen!";
        }
        else {
            alertText = "du hast verloren!";
        }
        setTimeout(function () {
            alert(alertText);
            location.reload();
        }, 300);
    }
    function shuffle(array) {
        let currentIndex = array.length, randomIndex;
        // While there remain elements to shuffle...
        while (currentIndex != 0) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]
            ];
        }
        // return array;
    }
})(A03_1_SequenzmemorySettings || (A03_1_SequenzmemorySettings = {}));
//# sourceMappingURL=exercise03.1.js.map