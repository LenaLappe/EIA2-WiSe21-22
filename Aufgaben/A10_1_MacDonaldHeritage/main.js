"use strict";
var A10_1;
(function (A10_1) {
    let headline;
    let startButton;
    let generalLyrics;
    let animalCharacteristics;
    let animalLyrics;
    let foodSupplies;
    let groceryList;
    let restartButton;
    let cat;
    let dog;
    let horse;
    let cow;
    let macDonaldsAnimals;
    let currentSupplies;
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        headline = document.createElement("span");
        headline.classList.add("headline");
        headline.innerHTML = "Welcome to old MacDonalds Farm";
        startButton = document.createElement("button");
        startButton.classList.add("startButton");
        startButton.innerHTML = "Lets GO!";
        document.body.appendChild(headline);
        document.body.appendChild(startButton);
        startButton.addEventListener("click", farmSettings);
    }
    function farmSettings() {
        headline.remove();
        startButton.remove();
        generalLyrics = document.createElement("span");
        generalLyrics.classList.add("genLyricsBox");
        generalLyrics.innerHTML = "Old MacDonald had a Farm E-I-E-I-O and on the farm ...";
        animalCharacteristics = document.createElement("span");
        animalCharacteristics.classList.add("animalCharact");
        animalLyrics = document.createElement("span");
        animalLyrics.classList.add("animalLyrics");
        foodSupplies = document.createElement("span");
        foodSupplies.classList.add("supplies");
        let suppliesHeadline = document.createElement("h3");
        suppliesHeadline.innerHTML = "Food Supplies";
        document.body.appendChild(generalLyrics);
        document.body.appendChild(animalCharacteristics);
        document.body.appendChild(animalLyrics);
        document.body.appendChild(foodSupplies);
        foodSupplies.appendChild(suppliesHeadline);
        createAnimals();
        createFoodSupplies();
        farm();
        setTimeout(function () {
            farm();
            setTimeout(function () {
                farm();
                setTimeout(function () {
                    endFarm();
                }, 5000);
            }, 5000);
        }, 5000);
    }
    function createAnimals() {
        cat = new A10_1.Animal("Charlie", "cat", "fish", "miauuuu", 1);
        dog = new A10_1.Animal("Wolfi", "dog", "meat", "wufff", 1);
        horse = new A10_1.Animal("Bella", "horse", "hay", "heyahh", 5);
        cow = new A10_1.Animal("Johann", "cow", "grass", "muhh", 7);
        macDonaldsAnimals = [cat, dog, horse, cow];
    }
    function createFoodSupplies() {
        currentSupplies = new Map();
        currentSupplies.set("fish", getRandomNumber(2, 10));
        currentSupplies.set("meat", getRandomNumber(3, 10));
        currentSupplies.set("hay", getRandomNumber(5, 30));
        currentSupplies.set("grass", getRandomNumber(7, 40));
    }
    function farm() {
        let currentAnimal = macDonaldsAnimals[getRandomNumber(0, macDonaldsAnimals.length)];
        currentAnimal.eat(currentSupplies);
        refreshSupplies();
        refreshAnimalCharacteristics(currentAnimal);
        refreshAnimalLyrics(currentAnimal);
    }
    function refreshSupplies() {
        let supplyString = "";
        supplyString += "Food supply: ";
        supplyString += "<br>";
        supplyString += "<br>";
        supplyString += "fish: ";
        supplyString += currentSupplies.get("fish");
        supplyString += " kg";
        supplyString += "<br>";
        supplyString += "<br>";
        supplyString += "meat: ";
        supplyString += currentSupplies.get("meat");
        supplyString += " kg";
        supplyString += "<br>";
        supplyString += "<br>";
        supplyString += "hay: ";
        supplyString += currentSupplies.get("hay");
        supplyString += " kg";
        supplyString += "<br>";
        supplyString += "<br>";
        supplyString += "grass: ";
        supplyString += currentSupplies.get("grass");
        supplyString += " kg";
        foodSupplies.innerHTML = supplyString;
    }
    function refreshAnimalCharacteristics(currentAnimal) {
        let characteristics = "";
        characteristics += "<img src=\"" + currentAnimal.image + "\" width= \"100px\" " + " height= \"100px\"" + ">";
        characteristics += "<br>";
        characteristics += "<br>";
        characteristics += "<br>";
        characteristics += "My name is " + currentAnimal.name;
        characteristics += "<br>";
        characteristics += "<br>";
        characteristics += "I'm a " + currentAnimal.species;
        characteristics += "<br>";
        characteristics += "<br>";
        characteristics += "I like to eat " + currentAnimal.food;
        characteristics += "<br>";
        characteristics += "<br>";
        characteristics += "I make " + currentAnimal.sound;
        animalCharacteristics.innerHTML = characteristics;
    }
    function refreshAnimalLyrics(currentAnimal) {
        let lyricsOfAnimal = "";
        lyricsOfAnimal = currentAnimal.lyrics;
        animalLyrics.innerHTML = lyricsOfAnimal;
    }
    function endFarm() {
        generalLyrics.remove();
        animalCharacteristics.remove();
        animalLyrics.remove();
        groceryList = document.createElement("span");
        groceryList.classList.add("grocery");
        let groceries = "";
        groceries += "Old MacDonald needs more of the following goods:";
        groceries += "<br>";
        groceries += "<br>";
        currentSupplies.forEach((value, key) => {
            if (value <= 10) {
                groceries += "-" + key;
                groceries += "<br>";
                groceries += "<br>";
            }
        });
        groceryList.innerHTML = groceries;
        restartButton = document.createElement("button");
        restartButton.classList.add("restart");
        restartButton.innerHTML = "new day";
        document.body.appendChild(groceryList);
        document.body.appendChild(restartButton);
        restartButton.addEventListener("click", restartFunction);
    }
    function restartFunction() {
        document.body.innerHTML = "";
        farmSettings();
    }
    //https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    function getRandomNumber(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
})(A10_1 || (A10_1 = {}));
//# sourceMappingURL=main.js.map