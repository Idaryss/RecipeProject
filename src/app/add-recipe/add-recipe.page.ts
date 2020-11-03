import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import * as actions from './../store/recipe.actions';
import * as fromRecipe from './../store/recipe.reducer';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.page.html',
  styleUrls: ['./add-recipe.page.scss'],
})
export class AddRecipePage implements OnInit {
  formGroup: FormGroup;

  constructor(public fb: FormBuilder, private store: Store<fromRecipe.State>) { }

  ngOnInit() {
    this.formGroup = this.fb.group({
      recipeTitle: ['']
    });
  }

  createRecipe(id, recipeTitle) {
      this.store.dispatch(new actions.Added({recipeTitle: recipeTitle, id: '1233'}));
  }

}
