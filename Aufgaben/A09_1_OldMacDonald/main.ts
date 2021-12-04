namespace A09_1 {

    let headline: HTMLSpanElement;
    let startButton: HTMLButtonElement;
    let generalLyrics: HTMLSpanElement;
    let animalCharacteristics: HTMLSpanElement;
    let animalLyrics: HTMLSpanElement;
    let foodSupplies: HTMLSpanElement;
    let groceryList: HTMLSpanElement;
    let restartButton: HTMLButtonElement;


    let cat: Animal;
    let dog: Animal;
    let horse: Animal;
    let cow: Animal;
    let macDonaldsAnimals: Animal[];

    let currentSupplies: Map<string, number>;

    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
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

    function farmSettings(): void {
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
        let suppliesHeadline: HTMLHeadingElement = document.createElement("h3");
        suppliesHeadline.innerHTML = "Food Supplies";

        document.body.appendChild(generalLyrics);
        document.body.appendChild(animalCharacteristics);
        document.body.appendChild(animalLyrics);
        document.body.appendChild(foodSupplies);
        foodSupplies.appendChild(suppliesHeadline);


        createAnimals();
        createFoodSupplies();
        farm();
        setTimeout(function (): void {
            farm(); 
            setTimeout(function (): void {
                farm();
                setTimeout(function (): void {
                    endFarm();
                },         5000);
            },         5000);
        },         5000); 
    }

    function createAnimals(): void {
        cat = new Animal("Charlie", "cat", "fish", "miauuuu", 1);
        dog = new Animal("Wolfi", "dog", "meat", "wufff", 1);
        horse = new Animal("Bella", "horse", "hay", "heyahh", 5);
        cow = new Animal("Johann", "cow", "grass", "muhh", 7);

        macDonaldsAnimals = [cat, dog, horse, cow];

    }

    function createFoodSupplies(): void {
        currentSupplies = new Map();

        currentSupplies.set("fish", getRandomNumber(2, 10));
        currentSupplies.set("meat", getRandomNumber(3, 10));
        currentSupplies.set("hay", getRandomNumber(5, 30));
        currentSupplies.set("grass", getRandomNumber(7, 40));
    }

    function farm(): void {
        let currentAnimal: Animal = macDonaldsAnimals[getRandomNumber(0, macDonaldsAnimals.length)];
        currentAnimal.eat(currentSupplies);



        refreshSupplies();
        refreshAnimalCharacteristics(currentAnimal);
        refreshAnimalLyrics(currentAnimal);
    }

    function refreshSupplies(): void {
        let supplyString: string = "";
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

    function refreshAnimalCharacteristics(currentAnimal: Animal): void {
        let characteristics: string = "";
        characteristics += "<img src=\"" + currentAnimal.image  + "\" width= \"100px\" " + " height= \"100px\"" + ">";
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

    function refreshAnimalLyrics(currentAnimal: Animal): void {
        let lyricsOfAnimal: string = "";
        lyricsOfAnimal = currentAnimal.lyrics;

        animalLyrics.innerHTML = lyricsOfAnimal;
    }

    function endFarm (): void {
        generalLyrics.remove();
        animalCharacteristics.remove();
        animalLyrics.remove();

        groceryList = document.createElement("span");
        groceryList.classList.add("grocery");

        let groceries: string = "";
        groceries += "Old MacDonald needs more of the following goods:";
        groceries += "<br>";
        groceries += "<br>";

        currentSupplies.forEach(( value: number, key: string) => {
            if (value <= 10 ) {
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


    function restartFunction (): void {
        document.body.innerHTML = "";

        farmSettings();
    }


    //https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    function getRandomNumber(min: number, max: number): number {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

}
