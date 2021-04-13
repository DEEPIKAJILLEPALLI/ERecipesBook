import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'rb-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
  providers:[RecipesService]
})
export class RecipesListComponent implements OnInit {
// recipes:Recipe[]=[
// new Recipe('Black Pasta','Breakfast withEgg and choclate','/assets/blackpasta.jpg',[]),
// new Recipe('Lemon Chicken and spinach','Lemon Chicken and spinach soup','/assets/recipeimg.jpg',[]),
// new Recipe('Lemon Chicken and spinach','Lemon Chicken and spinach soup','/assets/recipe3.jpg',[]),

// new Recipe('Lemon Chicken and spinach','Lemon Chicken and spinach soup','/assets/recipe2.jpg',[])
// ];
recipes:Recipe[]=[];
@Output() recipeSelected=new EventEmitter<Recipe>();
  constructor(private recipeService:RecipesService) { }

  ngOnInit() {
    this.recipes=this.recipeService.getRecipes();
  }
  onSelected(recipe:Recipe){
    this.recipeSelected.emit(recipe);
  }

}
