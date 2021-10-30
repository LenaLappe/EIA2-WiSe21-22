var A2_1_EventInspector;
(function (A2_1_EventInspector) {
    var body;
    var div0;
    var div1;
    var span;
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
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
    function handleMouseMove(_event) {
        setInfoBox(_event);
    }
    function setInfoBox(_event) {
        span.innerHTML = "x= " + _event.clientX + " & " + "y= " + _event.clientY;
        span.style.left = (_event.clientX + 10) + "px";
        span.style.top = (_event.clientY + 15) + "px";
    }
    function handleClick(_event) {
        logInfo(_event);
    }
    function handleKeyup(_event) {
        logInfo(_event);
    }
    function logInfo(_event) {
        console.log("eventType" + _event.type);
        console.log("target" + _event.target);
        console.log("currentTarget" + _event.currentTarget);
        console.log("wholeEvent" + _event);
    }
})(A2_1_EventInspector || (A2_1_EventInspector = {}));
//# sourceMappingURL=exercise02.1.js.map