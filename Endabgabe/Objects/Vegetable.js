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
        constructor(_uiField, _growthStatus2, _growthTime, _fertilize, _fertilizePrice, _water, _waterPrice, _price, _income, _damage, _health) {
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
        onClick() {
            alert("on click vegetable");
        }
        // https://stackoverflow.com/questions/44642223/need-help-finding-the-time-left-on-a-settimeout-function-being-used-to-continuou    
        handleGrowth() {
            this.timeoutHandle = setTimeout(this.growNow, this.growthTime, this);
            this.timeoutStart = Date.now();
        }
        handleWater() {
            this.changeGrowTimeout(this.water);
        }
        handleFertilize() {
            this.changeGrowTimeout(this.fertilize);
        }
        changeGrowTimeout(percentSpeedup) {
            const remainingTime = this.growthTime - (Date.now() - this.timeoutStart);
            clearTimeout(this.timeoutHandle);
            console.log(remainingTime * (1 - percentSpeedup));
            this.timeoutHandle = setTimeout(this.growNow, remainingTime * (1 - percentSpeedup), this);
            this.timeoutStart = Date.now();
        }
        growNow(self) {
            self.status = Status.Plant;
            self.uiField.refreshUI();
        }
        handleHarvest() {
            this.uiField.recentVegetable = null;
            this.uiField.refreshUI();
        }
    }
    Gemuesegarten.Vegetable = Vegetable;
})(Gemuesegarten || (Gemuesegarten = {}));
//# sourceMappingURL=Vegetable.js.map