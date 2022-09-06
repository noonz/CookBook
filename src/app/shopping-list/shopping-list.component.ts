import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
    ingredients: Ingredient[];
    subscriptions: Subscription[] = [];

    constructor(private shoppingListService: ShoppingListService) {}

    ngOnInit(): void {
        this.ingredients = this.shoppingListService.getIngredients();
        this.subscriptions.push(
            this.shoppingListService.ingredientsChanged.subscribe(
                (ingredients: Ingredient[]) => {
                    this.ingredients = ingredients;
                }
            )
        );
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach((sub) => {
            sub.unsubscribe();
        });
    }

    onIngredientAdded(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
    }
}
