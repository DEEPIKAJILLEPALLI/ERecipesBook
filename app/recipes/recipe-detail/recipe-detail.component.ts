import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe';
import { ShoppingListService } from '../../shopping-list';

@Component({
  selector: 'rb-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() selectedRecipe:Recipe;
  
  constructor(private shpngList:ShoppingListService) { }

  ngOnInit() {
  }
  onAddToShoppingList(){
    this.shpngList.addItems(this.selectedRecipe.ingredients);
  }
}
