namespace Gemuesegarten {

    let startButton: HTMLElement = document.getElementById("startButton")!;

    startButton.addEventListener("click", startfct);


    function startfct (): void {
        window.location.href = "http://127.0.0.1:5500/Endabgabe/Gemuesegarten.html";
    }
}