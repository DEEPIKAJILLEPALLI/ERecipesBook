import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { Ingredient } from '../shared';

@Injectable()
export class RecipesService {
private recipes:Recipe[]=[
  new Recipe('Black Pasta','Breakfast withEgg and choclate','/assets/blackpasta.jpg',[new Ingredient('eggs',2),new Ingredient('choclate',1)]),
  new Recipe('Lemon Chicken and spinach','Lemon Chicken and spinach soup','/assets/recipeimg.jpg',[]),
  new Recipe('Lemon Chicken and spinach','Lemon Chicken and spinach soup','/assets/recipe3.jpg',[new Ingredient('eggs',2),new Ingredient('choclate',1)]),
  
  new Recipe('Lemon Chicken and spinach','Lemon Chicken and spinach soup','/assets/recipe2.jpg',[new Ingredient('eggs',2),new Ingredient('choclate',1)])
  ];
  constructor() { }
  getRecipes(){
    return this.recipes;
  }

}
