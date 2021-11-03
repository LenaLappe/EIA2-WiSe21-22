namespace A2_1_EventInspector {


    let body: HTMLElement;
    let div0: HTMLDivElement; 
    let div1: HTMLDivElement;
    let span: HTMLElement;

    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        console.log(_event);

        body = document.querySelector("body");
        div0 = document.querySelector(".div0");
        div1 = document.querySelector(".div1");
        span = document.querySelector("span");

        document.addEventListener("mousemove", handleMouseMove);

        div0.addEventListener("click", handleClick);
        div1.addEventListener("click", handleClick);
        document.addEventListener("click", handleClick);
        body.addEventListener("click", handleClick);

        div0.addEventListener("keyup", handleKeyup);
        div1.addEventListener("keyup", handleKeyup);
        document.addEventListener("keyup", handleKeyup);
        body.addEventListener("keyup", handleKeyup);

    }

    function handleMouseMove (_event: MouseEvent): void {
        setInfoBox(_event);
    }

    function setInfoBox (_event: MouseEvent): void {
        span.innerHTML = "x= " + _event.clientX + " & " + "y= " + _event.clientY + "<br>";
        span.innerHTML += "target: " + _event.target;

        span.style.left = (_event.clientX + 10) + "px";
        span.style.top = (_event.clientY + 15) + "px";
    }

    function handleClick (_event: Event): void {
        logInfo(_event);
    }

    function handleKeyup (_event: Event): void {
        logInfo(_event);
    }

    function logInfo (_event: Event): void {
        console.log("eventType" + _event.type);
        console.log("target" , _event.target);
        console.log("currentTarget" , _event.currentTarget);
        console.log("wholeEvent" , _event);
        
    }
}