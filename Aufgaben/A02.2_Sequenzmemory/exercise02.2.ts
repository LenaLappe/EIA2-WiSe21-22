namespace A2_2_Sequenzmemory_Amélie {

    let gameOn: boolean = false;
    let word: string;
    let prepTime: number = 5;
    let gameTime: number = 60;
    let sequenz: string[];
    let timer: HTMLSpanElement;
    let wrongFeedback: HTMLSpanElement;
    let correctFeedback: HTMLSpanElement;

    window.addEventListener("load", prepareGame);

    function prepareGame(_event: Event): void {

        sequenz = prompt["enter a word"];

        createGameScreen();
    }

    function createGameScreen (): void {

        let gameboard: HTMLDivElement;
        gameboard = document.createElement("div");
        document.createAttribute("id");
        
    }

}