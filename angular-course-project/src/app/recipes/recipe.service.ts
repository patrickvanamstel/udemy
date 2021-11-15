import { Injectable } from "@angular/core";
import { EventEmitter } from "@angular/core"
import { Recipe } from "./recipe-model";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";



@Injectable()
export class RecipeService{

  recipeSelected = new EventEmitter<Recipe>();

  constructor(private shoppingListService : ShoppingListService) {
  }

  private recipes: Recipe[] = [
    new Recipe(
      'A test recipe 1' ,
      'a test description 1' ,
      'https://static01.nyt.com/images/2021/03/28/dining/mc-shakshuka/mc-shakshuka-articleLarge.jpg',
      [new Ingredient('Bread',1)]),
    new Recipe(
      'A test recipe 2' ,
      'a test description 2' ,
      'https://static01.nyt.com/images/2021/03/28/dining/mc-shakshuka/mc-shakshuka-articleLarge.jpg',
      [new Ingredient('Milk' , 5)]),
    new Recipe(
      'A test recipe 3' ,
      'a test description 3' ,
      'https://static01.nyt.com/images/2021/03/28/dining/mc-shakshuka/mc-shakshuka-articleLarge.jpg',
      [new Ingredient('Butter' , 2)]),
    new Recipe(
      'A test recipe 4' ,
      'a test description 4' ,
      'https://static01.nyt.com/images/2021/03/28/dining/mc-shakshuka/mc-shakshuka-articleLarge.jpg',
      [new Ingredient('Oil' , 2)])
  ];

  getRecipes(){
    return this.recipes.slice(); // slice is deep copy
  }

  addIngredientsToShoppingList(ingredients: Ingredient[] | undefined){
    this.shoppingListService.addIngredients(ingredients);
  }


}
