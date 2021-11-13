namespace A03_1_SequenzmemorySettings {

    let word: string;
    let sequenz: string[];
    let timer: HTMLSpanElement;
    let mixed: string[];
    let letter: string;
    // let inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll("input");
    // let fieldsets: NodeListOf<HTMLFieldSetElement>;
    let formElementSettings: HTMLFormElement;
    let gameField: HTMLDivElement;
    let globalFormData: FormData;
    let gameCard: HTMLSpanElement;
    let cardsOpened: number = 0;
    // let body: HTMLElement = document.body;

    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        console.log("hallo");
        // let fieldsets: NodeListOf<HTMLFieldSetElement> = document.querySelectorAll("fieldset");

        let form: HTMLElement = <HTMLElement>document.querySelector("div#form");
        form.addEventListener("change", handleChange);

        let startButton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#startButton");
        startButton.addEventListener("click", createGamefield);

    }

    function handleChange(_event: Event): void {
        let formData: FormData = new FormData(document.forms[0]);
        console.log(formData);
        for (let entry of formData) {
            console.log(entry);

            let card: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" + entry[0] + "']");
            console.log(card);

        }

        globalFormData = formData;


    }


    function createGamefield(_event: MouseEvent): void {
        document.getElementById("formElement")!.remove();
        gameField = document.createElement("div");
        gameField.classList.add("field");

        let cardHeight: string = <string>globalFormData.get("card");

        let cardColor: string = <string>globalFormData.get("cardColor");
        let backgroundColor: string = <string>globalFormData.get("backgroundColor");
        let fontColor: string = <string>globalFormData.get("fontColor");

        let fontStyle: string = <string>globalFormData.get("Radiogroup");
        

        let timerStepper: number = parseInt(<string>globalFormData.get("stepper"));

        document.body.setAttribute("style", "background-color:" + backgroundColor + ";");

        gameField.addEventListener("click", handleClickCard);
       
        document.body.appendChild(gameField);

        let timer: HTMLDivElement = document.createElement("div");
        timer.classList.add("timer");
        timer.innerHTML = timerStepper.toString();
        
        gameField.appendChild(timer);

       

        let selectedWord: string = <string>globalFormData.get("selectedWord")!;
        console.log(selectedWord);

        sequenz = new Array(selectedWord.length);
        mixed = new Array(selectedWord.length);

        for (let index: number = 0; index < selectedWord.length; index++) {
            let letter: string = selectedWord.charAt(index);
            console.log(letter);

            sequenz[index] = letter;
            mixed[index] = letter;
        }

        console.log(sequenz);
        shuffle(mixed);



        for (let i: number = 0; i < mixed.length; i++) {

            gameCard = document.createElement("span");
            gameCard.innerHTML = mixed[i];

            let styleString: string = "";
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
            styleString += parseInt(cardHeight) * 0.9 ;
            styleString += "px;";

            gameCard.setAttribute("style", styleString );
            gameCard.setAttribute("id", i.toString());



            gameField.appendChild(gameCard);

        }
       
        setTimeout(function(): void {
            console.log("Waited");
            let allGameCards: HTMLCollection = document.getElementsByTagName("span");
            for (let index: number = 0; index < allGameCards.length; index++) {
                allGameCards.item(index)!.innerHTML = "";
                
            }
            setInterval(function(): void {
                timerStepper--;
                timer.innerHTML = timerStepper.toString();
                if (timerStepper == 0) {
                    finishGame(false);
                }
            } ,         1000);
        },         2000);


        
    }

    function handleClickCard (_event: MouseEvent): void {
        let clickedCard: HTMLElement = <HTMLElement>_event.target;
        let clickedCardID: number =  parseInt(clickedCard.getAttribute("id")!);

        clickedCard.innerHTML = mixed[clickedCardID];

        if (sequenz[cardsOpened] == mixed[clickedCardID]) {
            if (cardsOpened == sequenz.length - 1) {
              finishGame(true);
            }
            
        } else {
            finishGame(false);
        }
        cardsOpened++;

    }


    function finishGame (feedback: boolean): void {
        let alertText: string;

        if (feedback) {
            alertText = "du hast gewonnen!";
        } else {
            alertText = "du hast verloren!";
        }
        setTimeout(function(): void {
            alert(alertText);
            location.reload();
        } ,        300);
    }


    function shuffle (array: string[]): void {
        let currentIndex: number = array.length,  randomIndex: number;
      
        // While there remain elements to shuffle...
        while (currentIndex != 0) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        // return array;
      }



   


}