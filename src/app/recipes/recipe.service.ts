import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe-model';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe(
            'Pizza',
            'Yum',
            'https://images.dailyhive.com/20170209082215/bitandos.jpg',
            [new Ingredient('Cheese', 5), new Ingredient('Olives', 20)]
        ),
        new Recipe(
            'Another Pizza',
            'Yummier',
            'https://images.dailyhive.com/20170209082215/bitandos.jpg',
            [
                new Ingredient('Green Peppers', 2),
                new Ingredient('Mushrooms', 10)
            ]
        ),
    ];

    constructor(private shoppingListService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice(); // copy the array
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}
