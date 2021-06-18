import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';


//store 
import { select, Store } from '@ngrx/store';
import * as actions from './../store/recipe.actions';
import * as fromRecipe from './../store/recipe.reducer';
import { Observable } from 'rxjs';
import { selectRecipes } from '../store/recipe.selectors';
import { Recipe } from './../store/recipe.reducer';

@Component({
  selector: 'app-recipe',
  templateUrl: 'recipe.page.html',
  styleUrls: ['recipe.page.scss']
})
export class RecipePage implements OnInit{

  recipes$: Observable<Recipe[]>;

  recipes: any = [
    {name: 'Lasagne a la bolognaise', src: '../../../assets/recipeImages/Lasagne.jpg'},
    {name: 'Pizza 3 fromages', src: '../../../assets/recipeImages/pizza.jpeg'},
    {name: 'Pate au Saumon', src: '../../../assets/recipeImages/Lasagne.jpg'},
    {name: 'Gratin dauphinois', src: '../../../assets/recipeImages/pizza.jpeg'},
    {name: 'Salade irlandaise', src: '../../../assets/recipeImages/Lasagne.jpg'},
    {name: 'Tourte au Basilic', src: '../../../assets/recipeImages/pizza.jpeg'},
    {name: 'Soupe Miso', src: '../../../assets/recipeImages/Lasagne.jpg'},
    {name: 'Risotto aux crevettes', src: '../../../assets/recipeImages/pizza.jpeg'},
    {name: 'Cake a la banane', src: '../../../assets/recipeImages/Lasagne.jpg'},
    {name: 'Cerisier', src: '../../../assets/recipeImages/pizza.jpeg'},
    {name: 'Lasagne a la bolognaise', src: '../../../assets/recipeImages/Lasagne.jpg'},
    {name: 'Pizza 3 fromages', src: '../../../assets/recipeImages/pizza.jpeg'},
    {name: 'Lasagne a la bolognaise', src: '../../../assets/recipeImages/Lasagne.jpg'},
    {name: 'Pizza 3 fromages', src: '../../../assets/recipeImages/pizza.jpeg'},
    {name: 'Lasagne a la bolognaise', src: '../../../assets/recipeImages/Lasagne.jpg'},
    {name: 'Pizza 3 fromages', src: '../../../assets/recipeImages/pizza.jpeg'},
    {name: 'Lasagne a la bolognaise', src: '../../../assets/recipeImages/Lasagne.jpg'},
    {name: 'Pizza 3 fromages', src: '../../../assets/recipeImages/pizza.jpeg'},
    {name: 'Lasagne a la bolognaise', src: '../../../assets/recipeImages/Lasagne.jpg'},
    {name: 'Pizza 3 fromages', src: '../../../assets/recipeImages/pizza.jpeg'},
    {name: 'Lasagne a la bolognaise', src: '../../../assets/recipeImages/Lasagne.jpg'},
    {name: 'Pizza 3 fromages', src: '../../../assets/recipeImages/pizza.jpeg'},
  ];


  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

  constructor(public actionSheetController: ActionSheetController, private router: Router, private store: Store<fromRecipe.RecipeState>) {}

  ngOnInit() {
   // this.recipesNew = this.store.select(fromRecipe.selectAll);
 //   this.store.dispatch(new actions.Query());
 this.loadRecipes();
 this.store.dispatch(actions.loadRecipes());

  }

  // createRecipe() {
  //   const recipe: fromRecipe.Recipe = {
  //     id: new Date().getUTCMilliseconds().toString(),
  //     recipeTitle: 'my Title'
  //   };
  //   this.store.dispatch(new actions.Added(recipe));
  // }

  // updateRecipe(id, recipeTitle) {
  //   this.store.dispatch(new actions.Update(id, recipeTitle));
  // }


  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Add New Recipe',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Add new recipe',
        icon: 'add',
        handler: () => {
         this.router.navigate(['/add-recipe']);
        }
      }, {
        text: 'Import from website',
        icon: 'download',
        handler: () => {
          console.log('download clicked');
        }
      }, {
        text: 'Scan recipe from photo',
        icon: 'camera',
        handler: () => {
          console.log('photo clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  loadRecipes() {
    this.recipes$ = this.store.pipe(select(selectRecipes));
  }
}
