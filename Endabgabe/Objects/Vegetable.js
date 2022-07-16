"use strict";
var Gemuesegarten;
(function (Gemuesegarten) {
    let Status;
    (function (Status) {
        Status[Status["Seedling"] = 0] = "Seedling";
        Status[Status["Plant"] = 1] = "Plant";
        Status[Status["Dying"] = 2] = "Dying";
    })(Status = Gemuesegarten.Status || (Gemuesegarten.Status = {}));
    class Vegetable {
        constructor(_uiField, _growthStatus2, _growthTime, _fertilize, _fertilizePrice, _water, _price, _income, _health) {
            this.water = 0;
            this.fertilize = 0;
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
                let bugPosibleCount = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
                console.log("Bug posible count = " + bugPosibleCount);
                for (let i = 0; i < bugPosibleCount; i++) {
                    let getRandomNumber = Math.floor(Math.random() * (this.growthTime - 1 + 1)) + 1;
                    console.log("getrandomNumber = " + getRandomNumber);
                    setTimeout(this.handleBug, getRandomNumber, this);
                }
            }
        }
        getPlantPrice() {
            return Math.round(this.plantPrice * Gemuesegarten.Wallet.instance.inflationRatio);
        }
        getIncome() {
            return Math.round(this.income * Gemuesegarten.Wallet.instance.inflationRatio);
        }
        getFertilizePrice() {
            return Math.round(this.fertilizePrice * Gemuesegarten.Wallet.instance.inflationRatio);
        }
        getHealPrice() {
            return Math.round(this.healPrice * Gemuesegarten.Wallet.instance.inflationRatio);
        }
        onClick() {
            console.log("hello, vegetable");
        }
        plantSeedlings() {
            Gemuesegarten.Wallet.instance.handleSeedlingsMoney(this);
        }
        // https://stackoverflow.com/questions/44642223/need-help-finding-the-time-left-on-a-settimeout-function-being-used-to-continuou    
        handleGrowth() {
            setTimeout(this.growNow, this.growthTime, this);
        }
        handleWater() {
            this.water++;
        }
        handleFertilize() {
            this.fertilize++;
            Gemuesegarten.Wallet.instance.handleFertilizeMoney(this);
        }
        growNow(self) {
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
        handleHarvest() {
            this.removeVegetable(this);
            Gemuesegarten.Wallet.instance.handleHarvestMoney(this);
        }
        removeVegetable(self) {
            self.uiField.recentVegetable = null;
            self.uiField.refreshUI();
        }
        handleBug(self) {
            let minProbability = 1;
            let maxProbability = 100;
            let randomNumber;
            randomNumber = Math.floor(Math.random() * (maxProbability - minProbability + 1)) + minProbability;
            if (randomNumber > 60) {
                self.hasBug = true;
                console.log("Ich bin ein Bug");
                self.uiField.refreshUI();
            }
        }
        handleHeal() {
            this.hasBug = false;
            Gemuesegarten.Wallet.instance.handleHealMoney(this);
            this.uiField.refreshUI();
        }
    }
    Gemuesegarten.Vegetable = Vegetable;
})(Gemuesegarten || (Gemuesegarten = {}));
//# sourceMappingURL=Vegetable.js.map