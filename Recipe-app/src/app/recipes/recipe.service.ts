import { EventEmitter } from "@angular/core";

import { Recipe } from "./recipe.model";

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test desc', 'https://shorturl.at/ejPT0'),
        new Recipe('A New Test Recipe', 'This is a uniqe test desc', 'https://shorturl.at/jnpu2')
      ];

      getRecipes(){
        return this.recipes.slice();
      }
}