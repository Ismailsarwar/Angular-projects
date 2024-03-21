import { EventEmitter, Injectable } from "@angular/core";

import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
          'A Test Recipe', 
          'This is simply a test desc', 
          'https://shorturl.at/ejPT0',
          [
            new Ingredient('Meat', 1),
            new Ingredient('French Fries', 20)
          ]),
        new Recipe(
          'A New Test Recipe', 
          'What else you need to say ?', 
          'https://shorturl.at/jnpu2',
          [
            new Ingredient('Buns', 2),
            new Ingredient('Meat', 10)
          ]),
      ];

      constructor(private slService: ShoppingListService) {}

      getRecipes(){
        return this.recipes.slice();
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
      }
}