var A01_RandomPoem;
(function (A01_RandomPoem) {
    // Bearbeitet mit Liz und Kriss und Amélie
    var subject = ["Harry", "Hermine", "Ron", "Snape", "Hagrid", "Dumbledore"];
    var verb = ["braut", "liebt", "studiert", "schreit", "lacht", "zaubert"];
    var object = ["Zaubertränke", "Hogwarts", "Dementoren", "den Grimm", "Lupin", "Dobby"];
    // console.log(subject);
    // console.log(verb);
    // console.log(object);
    for (var i = subject.length; i > 0; i--) {
        getVerse(subject, verb, object);
        // console.log(i);
        // console.log(y);
    }
    function getVerse(_subject, _verb, _object) {
        var vers = "";
        var randomNumberS = Math.floor(Math.random() * _subject.length);
        var randomNumberV = Math.floor(Math.random() * _verb.length);
        var randomNumberO = Math.floor(Math.random() * _object.length);
        vers += _subject.splice(randomNumberS, 1)[0] + " " + _verb.splice(randomNumberV, 1)[0] + " " + _object.splice(randomNumberO, 1);
        console.log(vers);
        // console.log(_subject.splice(randomNumberS));
        return ("Alohomora");
    }
})(A01_RandomPoem || (A01_RandomPoem = {}));
//# sourceMappingURL=exercise01.js.map