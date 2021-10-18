namespace A01_RandomPoem {

         // Bearbeitet mit Liz und Kriss und Amélie

    let subjects: string[] = ["Harry", "Hermine", "Ron", "Snape", "Hagrid", "Dumbledore"];
    let verbs: string[] = ["braut", "liebt", "studiert", "schreit", "lacht", "zaubert"];
    let objects: string[] = ["Zaubertränke", "Hogwarts", "Dementoren", "den Grimm", "Lupin", "Dobby"];

    // console.log(subject);
    // console.log(verb);
    // console.log(object);

    for (let i: number = subjects.length; i > 0; i-- ) {
        
        let endVers: string = getVerse(subjects, verbs, objects);
        // console.log(i);
        // console.log(y);
        console.log(endVers);
    }

    function getVerse(_subject: string[] , _verb: string[], _object: string[]): string {
        
        let vers: string = "";

        let randomNumberS: number = Math.floor(Math.random() * _subject.length);
        let randomNumberV: number = Math.floor(Math.random() * _verb.length);
        let randomNumberO: number = Math.floor(Math.random() * _object.length);

        vers += _subject.splice(randomNumberS, 1)[0] + " " + _verb.splice(randomNumberV, 1)[0] + " " +  _object.splice(randomNumberO, 1);

        
        // console.log(_subject.splice(randomNumberS));

        return("Alohomora");
        
    }
}