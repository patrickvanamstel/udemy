import {Injectable} from "@angular/core";
import { EventEmitter } from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {isModuleWithProvidersNotGeneric} from "@angular/core/schematics/migrations/module-with-providers/util";

@Injectable()
export class ShoppingListService{

  ingredientsChanged = new EventEmitter<Ingredient[]>();


  private ingredients : Ingredient[]  = [
    new Ingredient('Apples' , 5),
    new Ingredient('Tomatos' , 10),

  ];

  getIngredients (){
    return this.ingredients.slice();
  }

  addIngredient(ingredient : Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.getIngredients());
  }

  addIngredients(ingredients : Ingredient[] | undefined){
    if (ingredients){
      this.ingredients.push(...ingredients);
      this.ingredientsChanged.emit(this.ingredients.slice());
    }
  }

}
