import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is simply a test',
    'https://www.cookingclassy.com/wp-content/uploads/2022/05/bolognese-2.jpg' ),
    new Recipe('A test Recipe', 'This is simply a test',
    'https://www.cookingclassy.com/wp-content/uploads/2022/05/bolognese-2.jpg' )
  ];
  

  constructor() { }

  ngOnInit() {
  }

}
