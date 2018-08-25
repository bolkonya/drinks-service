import { DrinkItem } from './drink.item';
import { VendingTip } from './tip.model';

export class VendingModel{
    id: number = 0;
    cash: number = 100;
    blocked1: boolean = false;
    blocked2: boolean = false;
    blocked5: boolean = false;
    blocked10: boolean = false;
    
    selectedDrinks: DrinkItem[] = [];
    drinksForSale: DrinkItem[] = [];
    currentInput: number = 0;
    currentOutput: number = 0;
    currentPrice: number = 0;
    blockedCoinList: boolean[] = [];
    tip: VendingTip = new VendingTip();

    constructor(data: any = {}) {
      for (let key in data) {
        if (key in this) {
          this[key] = data[key];
        }
      }
      this.blockedCoinList[1] = this.blocked1;
      this.blockedCoinList[2] = this.blocked2;
      this.blockedCoinList[5] = this.blocked5;
      this.blockedCoinList[10] = this.blocked10;
    }

    buyButtonIsNotActive() {
      return this.selectedDrinks.length === 0;
    }

    changeBlockingStatus(coin: number) {
      switch(coin) {
        case 1:
          this.blocked1 = !this.blocked1;
          this.blockedCoinList[coin] = this.blocked1;
          break;
        case 2:
          this.blocked2 = !this.blocked2;
          this.blockedCoinList[coin] = this.blocked2;
          break;
        case 5:
          this.blocked5 = !this.blocked5;
          this.blockedCoinList[coin] = this.blocked5;
          break;
        case 10:
          this.blocked10 = !this.blocked10;
          this.blockedCoinList[coin] = this.blocked10;
          break;
        default:
          break;
        }
    }

    getCoinStatusAction(coin: number) {
      if (this.blockedCoinList[coin]) {
        return "Разблокировать";
      } else {
        return "Заблокировать";
      }
    }
  
    getCoinStatus(coin: number) {
      if (this.blockedCoinList[coin]) {
        return "Заблокирована";
      } else {
        return "Разрешена";
      }
    }

    fillDrinksList(data: any[]) {//
      for (let d of data) {
        var drinkItem = new DrinkItem(d);
        this.drinksForSale.push(drinkItem);
      }
    }
  }