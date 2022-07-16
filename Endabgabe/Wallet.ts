namespace Gemuesegarten {

    export class Wallet {

    static instance: Wallet; 
        
    walletContainer: HTMLDivElement = document.querySelector(".walletContainer")!;

    // https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
    urlParam: URLSearchParams = new URLSearchParams(window.location.search);
    minPrice: number = parseInt(this.urlParam.get("minPrice")!);
    maxPrice: number = parseInt(this.urlParam.get("maxPrice")!);
    seedMoney: number = parseInt(this.urlParam.get("seedMoney")!);
    inflationRatio: number = 1;

    constructor() {
        setInterval(this.handleInflation, 150000);
    }

    handleInflation(): void {
        console.log("almost there");

        let vegetableButtons: HTMLDivElement;
        let plantActionButtons: HTMLDivElement;


        vegetableButtons = document.querySelector(".vegetableButtons")!;
        vegetableButtons.innerHTML = "";

        plantActionButtons = document.querySelector(".plantActionButtons")!;
        plantActionButtons.innerHTML = "";

        let changedInflation: number = Wallet.instance.randomIntFromInterval(Wallet.instance.minPrice, Wallet.instance.maxPrice);

        Wallet.instance.inflationRatio = changedInflation / 100;
        alert("Durch die Inflation schwanken die Preise");

    }

    
    randomIntFromInterval(min: number, max: number): number { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }


    

    handleHarvestMoney (recentVegetable: Vegetable): void {
        this.seedMoney = this.seedMoney + recentVegetable.income;
        this.refreshWalletUI(); 
    }

    handleFertilizeMoney (recentVegetable: Vegetable): void {
        this.seedMoney = this.seedMoney - recentVegetable.fertilizePrice;
        this.refreshWalletUI();
    }

    handleSeedlingsMoney (recentVegetable: Vegetable): void {
        this.seedMoney = this.seedMoney - recentVegetable.plantPrice;
        this.refreshWalletUI();
    }

    handleHealMoney (recentVegetable: Vegetable): void {
        this.seedMoney = this.seedMoney - recentVegetable.healPrice;
        this.refreshWalletUI();
    }

    refreshWalletUI (): void {
        this.walletContainer.innerHTML = "";

        this.walletContainer.innerHTML = "wallet: " + this.seedMoney.toString() + " €";
    }



    }
}  