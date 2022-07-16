"use strict";
var Gemuesegarten;
(function (Gemuesegarten) {
    class Wallet {
        constructor() {
            this.walletContainer = document.querySelector(".walletContainer");
            // https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
            this.urlParam = new URLSearchParams(window.location.search);
            this.minPrice = parseInt(this.urlParam.get("minPrice"));
            this.maxPrice = parseInt(this.urlParam.get("maxPrice"));
            this.seedMoney = parseInt(this.urlParam.get("seedMoney"));
            this.inflationRatio = 1;
            setInterval(this.handleInflation, 150000);
        }
        handleInflation() {
            console.log("almost there");
            let vegetableButtons;
            let plantActionButtons;
            vegetableButtons = document.querySelector(".vegetableButtons");
            vegetableButtons.innerHTML = "";
            plantActionButtons = document.querySelector(".plantActionButtons");
            plantActionButtons.innerHTML = "";
            let changedInflation = Wallet.instance.randomIntFromInterval(Wallet.instance.minPrice, Wallet.instance.maxPrice);
            Wallet.instance.inflationRatio = changedInflation / 100;
            alert("Durch die Inflation schwanken die Preise");
        }
        randomIntFromInterval(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
        handleHarvestMoney(recentVegetable) {
            this.seedMoney = this.seedMoney + recentVegetable.income;
            this.refreshWalletUI();
        }
        handleFertilizeMoney(recentVegetable) {
            this.seedMoney = this.seedMoney - recentVegetable.fertilizePrice;
            this.refreshWalletUI();
        }
        handleSeedlingsMoney(recentVegetable) {
            this.seedMoney = this.seedMoney - recentVegetable.plantPrice;
            this.refreshWalletUI();
        }
        handleHealMoney(recentVegetable) {
            this.seedMoney = this.seedMoney - recentVegetable.healPrice;
            this.refreshWalletUI();
        }
        refreshWalletUI() {
            this.walletContainer.innerHTML = "";
            this.walletContainer.innerHTML = "wallet: " + this.seedMoney.toString() + " €";
        }
    }
    Gemuesegarten.Wallet = Wallet;
})(Gemuesegarten || (Gemuesegarten = {}));
//# sourceMappingURL=Wallet.js.map