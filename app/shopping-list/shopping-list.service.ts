import { Injectable } from '@angular/core';
import { Ingredient } from '../shared';

@Injectable()
export class ShoppingListService {
private Items:Ingredient[]=[];
  constructor() { }
getItems(){
return this.Items;
}
addItems(items: Ingredient[]){
  Array.prototype.push.apply(this.Items,items);

}
}
