"use strict";
var L11;
(function (L11) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        // let instance: Super = new Super();
        let instanceSub = new L11.Sub();
        instanceSub.hug();
        console.log(L11.Super.blub);
        L11.Super.bluberBlub();
    }
})(L11 || (L11 = {}));
//# sourceMappingURL=main.js.map