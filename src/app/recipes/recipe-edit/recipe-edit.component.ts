import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-recipe-edit',
    templateUrl: './recipe-edit.component.html',
    styleUrls: ['./recipe-edit.component.scss'],
})
export class RecipeEditComponent implements OnInit {
    subscriptions: Subscription[] = [];
    id: number;
    editMode =  false;
    constructor(private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.subscriptions.push(
            this.route.params.subscribe((params: Params) => {
                this.id = +params['id'];
                this.editMode = params['id'] !== null;
            })
        )
    }
}
