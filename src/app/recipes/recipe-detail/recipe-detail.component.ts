import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe } from '../recipe-model';
import { RecipeService } from '../recipe.service';

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent implements OnInit {
    // @Input() recipe: Recipe;
    recipe: Recipe;
    recipeId: number;
    subscriptions: Subscription[] = [];

    constructor(
        private recipeService: RecipeService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.subscriptions.push(
            this.route.params.subscribe((params: Params) => {
                this.recipeId = +params['id'];
                this.recipe = this.recipeService.getRecipe(this.recipeId);
            })
        );
    }

    addToShoppingList() {
        this.recipeService.addIngredientsToShoppingList(
            this.recipe.ingredients
        );
    }

    onEditRecipe() {
        this.router.navigate(['edit'], { relativeTo: this.route });
    }
}
