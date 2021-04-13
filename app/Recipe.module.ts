import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { HeaderComponent } from './header.component';
import { RecipeBookComponent } from './recipe-book.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipeItemComponent } from './recipes/recipes-list/recipe-item.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListAddComponent } from './shopping-list/shopping-list-add.component';
import { DropdownDirective } from './dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';


@NgModule({
  declarations: [
    RecipeBookComponent,
    HeaderComponent,
    RecipesComponent,
    RecipesListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingListAddComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [ShoppingListService],
  bootstrap: [RecipeBookComponent]
})
export class RecipeModule { }
