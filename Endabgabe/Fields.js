"use strict";
var Gemuesegarten;
(function (Gemuesegarten) {
    class Fields {
        constructor(gameDivGiven) {
            this.gameDiv = gameDivGiven;
        }
        onClick() {
            if (this.recentVegetable == null) {
                let tomatoButton;
                let potatoButton;
                let lettuceButton;
                let carrotsButton;
                let cucumberButton;
                let vegetableButtons;
                vegetableButtons = document.querySelector(".vegetableButtons");
                tomatoButton = document.createElement("button");
                tomatoButton.classList.add("tomatoBtn");
                console.log("Hallo, ich bin eine Tomate");
                potatoButton = document.createElement("button");
                potatoButton.classList.add("potatoBtn");
                lettuceButton = document.createElement("button");
                lettuceButton.classList.add("lettuceBtn");
                carrotsButton = document.createElement("button");
                carrotsButton.classList.add("carrotsBtn");
                cucumberButton = document.createElement("button");
                cucumberButton.classList.add("cucumberBtn");
                console.log("Hallo, ich bin eine Gurke");
                vegetableButtons.appendChild(tomatoButton);
                vegetableButtons.appendChild(potatoButton);
                vegetableButtons.appendChild(lettuceButton);
                vegetableButtons.appendChild(carrotsButton);
                vegetableButtons.appendChild(cucumberButton);
                // Referenz auf sich selbst, da wir auf eine function in einer functiom aufrufen und this. somit nicht mehr gefunden werde kann
                let self = this;
                tomatoButton.addEventListener("click", function () {
                    self.recentVegetable = new Gemuesegarten.Tomato(self);
                    self.buttonRefreshUI();
                });
                potatoButton.addEventListener("click", function () {
                    self.recentVegetable = new Gemuesegarten.Potato(self);
                    self.buttonRefreshUI();
                });
                lettuceButton.addEventListener("click", function () {
                    self.recentVegetable = new Gemuesegarten.Lettuce(self);
                    self.buttonRefreshUI();
                });
                carrotsButton.addEventListener("click", function () {
                    self.recentVegetable = new Gemuesegarten.Carrots(self);
                    self.buttonRefreshUI();
                });
                cucumberButton.addEventListener("click", function () {
                    self.recentVegetable = new Gemuesegarten.Cucumber(self);
                    console.log("schon wieder ne Gurke");
                    self.buttonRefreshUI();
                });
            }
            else {
                let waterPlantButton;
                let fertilizePlantButton;
                let harvestPlantButton;
                let healPlantButton;
                let plantActionButtons = document.querySelector(".plantActionButtons");
                waterPlantButton = document.createElement("button");
                waterPlantButton.classList.add("waterPlantBtn");
                waterPlantButton.innerHTML = "water";
                fertilizePlantButton = document.createElement("button");
                fertilizePlantButton.classList.add("fertilizePlantBtn");
                fertilizePlantButton.innerHTML = "fertilize";
                harvestPlantButton = document.createElement("button");
                harvestPlantButton.classList.add("harvestPlantBtn");
                harvestPlantButton.innerHTML = "harvest";
                healPlantButton = document.createElement("button");
                healPlantButton.classList.add("healPlantBtn");
                healPlantButton.innerHTML = "heal";
                plantActionButtons.appendChild(waterPlantButton);
                plantActionButtons.appendChild(fertilizePlantButton);
                plantActionButtons.appendChild(harvestPlantButton);
                plantActionButtons.appendChild(healPlantButton);
                let self = this;
                waterPlantButton.addEventListener("click", function () {
                    self.recentVegetable.handleWater();
                    self.buttonRefreshUI();
                });
                fertilizePlantButton.addEventListener("click", function () {
                    self.recentVegetable.handleFertilize();
                    self.buttonRefreshUI();
                });
                harvestPlantButton.addEventListener("click", function () {
                    self.recentVegetable.handleHarvest();
                    self.buttonRefreshUI();
                });
                healPlantButton.addEventListener("click", function () {
                    self.buttonRefreshUI();
                });
            }
        }
        buttonRefreshUI() {
            let vegetableButtons;
            let plantActionButtons;
            let self = this;
            vegetableButtons = document.querySelector(".vegetableButtons");
            vegetableButtons.innerHTML = "";
            plantActionButtons = document.querySelector(".plantActionButtons");
            plantActionButtons.innerHTML = "";
            self.refreshUI();
        }
        refreshUI() {
            this.gameDiv.innerHTML = "";
            this.gameDiv.style.backgroundImage = "";
            this.gameDiv.style.backgroundSize = "";
            // https://stackoverflow.com/questions/18665702/javascript-setting-background-image-of-a-div-via-a-function-and-function-paramet
            if (this.recentVegetable != null) {
                if (this.recentVegetable.status == Gemuesegarten.Status.Plant) {
                    this.gameDiv.style.backgroundImage = "url(icons/" + this.recentVegetable.growthStatus2 + ".png)";
                    this.gameDiv.style.backgroundSize = "cover";
                }
                else if (this.recentVegetable.status == Gemuesegarten.Status.Seedling) {
                    this.gameDiv.style.backgroundImage = "url(icons/" + this.recentVegetable.growthStatus1 + ".png)";
                    this.gameDiv.style.backgroundSize = "cover";
                }
                else {
                    this.gameDiv.style.backgroundImage = "url(icons/" + this.recentVegetable.damageStatus + ".png)";
                }
            }
        }
    }
    Gemuesegarten.Fields = Fields;
})(Gemuesegarten || (Gemuesegarten = {}));
//# sourceMappingURL=Fields.js.map