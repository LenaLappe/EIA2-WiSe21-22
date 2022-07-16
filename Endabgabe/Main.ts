namespace Gemuesegarten {

    //Variablen deklarieren
    let board: number = 39;
    let gameboard: HTMLDivElement;
    // let startButton: HTMLElement = document.querySelector("#startButton")!;
    let gameContainer: HTMLDivElement;
    let fieldArray: Fields[] = [];
    let walletContainer: HTMLDivElement;
    let textContainer: HTMLDivElement;


    window.onload = drawField;


    function drawField(): void {
        Wallet.instance = new Wallet();
        gameContainer = document.querySelector(".gameContainer")!;
        walletContainer = document.querySelector(".walletContainer")!;

        // WalletContainer befüllen mit Startkapital, welches wir in Wallet entgegen nehmen
        walletContainer.innerHTML = "wallet: " + Wallet.instance.seedMoney.toString() + " €";

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


        textContainer = document.createElement("div");
        textContainer.classList.add("textContainer");
        textContainer.innerHTML = "Wenn du eine Pflanze gepflanzt hast, hover über deinen Setzlinge um zu sehen wie du sie pflegen musst, damit sie zu einer gesunden Pflanze heranwächst. Achte darauf, dass jede Pflanze genau das richtige bekommt und dass sie nicht von Schädlingen aufgegessen wird." ;

        document.body.appendChild(textContainer);

        console.log("hallo");

    }





}
