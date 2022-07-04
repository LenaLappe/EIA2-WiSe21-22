namespace Gemuesegarten {

    export enum Status {Seedling, Plant, Dying}


    export abstract class Vegetable {

        uiField: Fields;
        growthStatus1: string;
        growthStatus2: string;
        damageStatus: string;
        growthTime: number;
        neededFertilize: number;
        fertilize: number;
        fertilizePrice: number;
        neededWater: number;
        water: number;
        waterPrice: number;
        plantPrice: number;
        income: number;
        damage: number;
        health: number;

        status: Status;

        timeoutHandle: number;
        timeoutStart: number;

        constructor(_uiField: Fields, _growthStatus2: string, _growthTime: number, _fertilize: number, _fertilizePrice: number, _water: number, _waterPrice: number, _price: number, _income: number, _damage: number, _health: number) {
            this.uiField = _uiField;
            this.growthStatus2 = _growthStatus2;
            this.growthTime = _growthTime;
            this.fertilize = _fertilize;
            this.fertilizePrice = _fertilizePrice;
            this.water = _water;
            this.waterPrice = _waterPrice;
            this.plantPrice = _price;
            this.income = _income;
            this.damage = _damage;
            this.health = _health;

            this.growthStatus1 = "plant";
            this.damageStatus = "dead";
            this.status = Status.Seedling;

            this.handleGrowth();
        }

        onClick(): void {
            alert("on click vegetable");
            }
        
        // https://stackoverflow.com/questions/44642223/need-help-finding-the-time-left-on-a-settimeout-function-being-used-to-continuou    
        handleGrowth(): void {
            this.timeoutHandle = setTimeout(this.growNow,     this.growthTime, this);
            this.timeoutStart = Date.now();
        }

        handleWater(): void {
            this.changeGrowTimeout(this.water);
        }

        handleFertilize(): void {
            this.changeGrowTimeout(this.fertilize);
        }

        changeGrowTimeout(percentSpeedup: number): void {
            const remainingTime: number = this.growthTime - (Date.now() - this.timeoutStart);
            clearTimeout(this.timeoutHandle);
            console.log(remainingTime * (1 - percentSpeedup));
            this.timeoutHandle = setTimeout(this.growNow, remainingTime * (1 - percentSpeedup), this);
            this.timeoutStart = Date.now();
        }

        growNow(self: Vegetable): void {
            self.status = Status.Plant;
            self.uiField.refreshUI();
        }

        handleHarvest(): void {
            this.uiField.recentVegetable = null;
            this.uiField.refreshUI();
        }

    }


    
}