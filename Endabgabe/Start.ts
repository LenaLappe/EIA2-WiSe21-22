namespace Gemuesegarten {

    let startButton: HTMLElement = document.getElementById("startButton")!;

    startButton.addEventListener("click", startfct);

    // http://net-informations.com/js/iq/load.htm
    function startfct (): void {
        window.location.href = "https://lenalappe.github.io/EIA2-WiSe21-22/Endabgabe/Gemuesegarten.html";
    }
}