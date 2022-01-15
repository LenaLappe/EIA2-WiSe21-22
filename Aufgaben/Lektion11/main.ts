namespace L11 {

    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {

        // let instance: Super = new Super();

        let instanceSub: Sub = new Sub();
        instanceSub.hug();

        console.log(Super.blub);
        Super.bluberBlub();
    }
}