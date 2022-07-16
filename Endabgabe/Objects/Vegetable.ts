namespace Gemuesegarten {

    export enum Status {Seedling, Plant, Dying}


    export abstract class Vegetable {
        uiField: Fields;
        growthStatus1: string;
        growthStatus2: string;
        damageStatus: string;
        bugStatus: string;
        growthTime: number;
        neededFertilize: number;
        fertilizePrice: number;
        neededWater: number;
        plantPrice: number;
        income: number;
        damage: number;
        healPrice: number;

        status: Status;
        water: number = 0;
        fertilize: number = 0;
        hasBug: boolean;


        constructor(_uiField: Fields | null, _growthStatus2: string, _growthTime: number, _fertilize: number, _fertilizePrice: number, _water: number, _price: number, _income: number, _health: number) {
            
            this.growthStatus2 = _growthStatus2;
            this.growthTime = _growthTime;
            this.neededFertilize = _fertilize;
            this.fertilizePrice = _fertilizePrice;
            this.neededWater = _water;
            this.plantPrice = _price;
            this.income = _income;
            // this.damage = _damage;
            this.healPrice = _health;

            this.growthStatus1 = "plant";
            this.damageStatus = "dead";
            this.bugStatus = "bugs";
        
            this.status = Status.Seedling;

            if (_uiField != null) {
                this.uiField = _uiField;
                this.handleGrowth();
    
                let bugPosibleCount: number = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
                
                console.log("Bug posible count = " + bugPosibleCount);
      
                
                for (let i: number = 0; i < bugPosibleCount; i++) {
                    let getRandomNumber: number = Math.floor(Math.random() * (this.growthTime - 1 + 1)) + 1;
                    console.log("getrandomNumber = " + getRandomNumber);
                    setTimeout(this.handleBug,      getRandomNumber, this);  
                }
            }


        }

        getPlantPrice(): number {
            return Math.round(this.plantPrice * Wallet.instance.inflationRatio);
        }

        getIncome(): number {
            return Math.round(this.income * Wallet.instance.inflationRatio);
        }

        getFertilizePrice(): number {
            return Math.round(this.fertilizePrice * Wallet.instance.inflationRatio);
        }

        getHealPrice(): number {
            return Math.round(this.healPrice * Wallet.instance.inflationRatio);
        }



        onClick(): void {
            console.log("hello, vegetable");
        }

        plantSeedlings(): void {
            Wallet.instance.handleSeedlingsMoney(this);
        }
        
        // https://stackoverflow.com/questions/44642223/need-help-finding-the-time-left-on-a-settimeout-function-being-used-to-continuou    
        handleGrowth(): void {
            setTimeout(this.growNow,     this.growthTime, this);
        }

        handleWater(): void {
            this.water++;
        }

        handleFertilize(): void {
            this.fertilize++;
            Wallet.instance.handleFertilizeMoney(this);
        }


        growNow(self: Vegetable): void {

            if (self.water == self.neededWater && self.fertilize == self.neededFertilize) {
                self.status = Status.Plant;
                console.log("hei");
                console.log(self.water);
                console.log(self.neededWater);
            }
            else {
                self.status = Status.Dying;
                self.hasBug = false;
                console.log("fisch");
                setTimeout(self.removeVegetable, 2000, self);
            }

            self.uiField.refreshUI();
        }

        handleHarvest(): void {
            this.removeVegetable(this);
            Wallet.instance.handleHarvestMoney(this);
        
        }

        removeVegetable(self: Vegetable): void {
            self.uiField.recentVegetable = null;
            self.uiField.refreshUI();
        }


        handleBug(self: Vegetable): void {
            let  minProbability: number = 1;
            let  maxProbability: number = 100;

            let randomNumber: number;

            randomNumber =  Math.floor(Math.random() * (maxProbability - minProbability + 1)) + minProbability;
            
            if (randomNumber > 60) {
                self.hasBug = true;
                console.log("Ich bin ein Bug");
                self.uiField.refreshUI();
            }    
        }

        handleHeal(): void {
            this.hasBug = false;
            Wallet.instance.handleHealMoney(this);
            this.uiField.refreshUI();
        }
        

    }


    
}