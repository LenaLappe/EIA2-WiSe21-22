namespace Gemuesegarten {

    export class Fields {

        gameDiv: HTMLDivElement;
        recentVegetable: Vegetable|null;

        constructor(gameDivGiven: HTMLDivElement) {
            this.gameDiv = gameDivGiven;
        }



        onClick(): void {
            if (this.recentVegetable == null) {

                let tomatoButton: HTMLButtonElement;
                let potatoButton: HTMLButtonElement;
                let lettuceButton: HTMLButtonElement;
                let carrotsButton: HTMLButtonElement;
                let cucumberButton: HTMLButtonElement;
                let vegetableButtons: HTMLDivElement;

                vegetableButtons = document.querySelector(".vegetableButtons")!;


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
                let self: Fields = this;

                tomatoButton.addEventListener("click", function (): void { 
                    self.recentVegetable = new Tomato(self);
                    self.buttonRefreshUI();
                 });
                potatoButton.addEventListener("click", function (): void {
                    self.recentVegetable = new Potato(self);
                    self.buttonRefreshUI(); 
                });
                lettuceButton.addEventListener("click", function (): void { 
                    self.recentVegetable = new Lettuce(self);
                    self.buttonRefreshUI(); 
                });
                carrotsButton.addEventListener("click", function (): void { 
                    self.recentVegetable = new Carrots(self);
                    self.buttonRefreshUI(); 
                });
                cucumberButton.addEventListener("click", function (): void { 
                    self.recentVegetable = new Cucumber(self);
                    console.log("schon wieder ne Gurke");
                    self.buttonRefreshUI(); 
                });


            }

            else {
                let waterPlantButton: HTMLButtonElement;
                let fertilizePlantButton: HTMLButtonElement;
                let harvestPlantButton: HTMLButtonElement;
                let healPlantButton: HTMLButtonElement;
                let plantActionButtons: HTMLDivElement = document.querySelector(".plantActionButtons")!;

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


                let self: Fields = this;

                waterPlantButton.addEventListener("click", function (): void { 
                    self.recentVegetable!.handleWater();
                    self.buttonRefreshUI();
                 });

                fertilizePlantButton.addEventListener("click", function (): void { 
                    self.recentVegetable!.handleFertilize();
                    self.buttonRefreshUI();
                 }); 

                harvestPlantButton.addEventListener("click", function (): void { 
                    self.recentVegetable!.handleHarvest();
                    self.buttonRefreshUI();
                 });

                healPlantButton.addEventListener("click", function (): void { 
                    
                    self.buttonRefreshUI();
                 });

                
            }
        }


        buttonRefreshUI(): void {
            let vegetableButtons: HTMLDivElement;
            let plantActionButtons: HTMLDivElement;
            let self: Fields = this;

            vegetableButtons = document.querySelector(".vegetableButtons")!;
            vegetableButtons.innerHTML = "";

            plantActionButtons = document.querySelector(".plantActionButtons")!;
            plantActionButtons.innerHTML = "";

            self.refreshUI();
        }
        

        refreshUI(): void {
            this.gameDiv.innerHTML = "";
            this.gameDiv.style.backgroundImage = "";
            this.gameDiv.style.backgroundSize = "";
            

            // https://stackoverflow.com/questions/18665702/javascript-setting-background-image-of-a-div-via-a-function-and-function-paramet

            if (this.recentVegetable != null) {

                if (this.recentVegetable!.status == Status.Plant) {
                    this.gameDiv.style.backgroundImage =  "url(icons/" + this.recentVegetable!.growthStatus2 + ".png)";
                    this.gameDiv.style.backgroundSize = "cover";
                }
                else if (this.recentVegetable!.status == Status.Seedling) {
                    this.gameDiv.style.backgroundImage = "url(icons/" + this.recentVegetable!.growthStatus1 + ".png)";
                    this.gameDiv.style.backgroundSize = "cover";
                }
                else {
                    this.gameDiv.style.backgroundImage = "url(icons/" + this.recentVegetable!.damageStatus + ".png)";
                }
            }
        }

    }
}