import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
    constructor(
        public name: string,
        public description: string,
        public imageUrl: string,
        public ingredients: Ingredient[]
    ) {
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.ingredients = ingredients;
    }
}
