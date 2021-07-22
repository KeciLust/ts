import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    totalCoast(): number {
        let sum = 0;
     for(let i = 0; i < this._items.length; i++){
       sum += this._items[i].price;
     }
     return sum
    }

    totalCoastWithDiscount(discount: number): number {
      return this.totalCoast() / 100 * discount;
    }

    remove(id: number): void {
        delete this._items[id];
    }
}