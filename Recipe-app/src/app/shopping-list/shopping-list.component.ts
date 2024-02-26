import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
    new Ingredient('Bananas', 20),
    new Ingredient('Oranges', 15),
  ];

  constructor() {}

  ngOnInit() {
    
  }

  onIngredientAdded(Ingredient: Ingredient) {
    this.ingredients.push(Ingredient)
  }

}
