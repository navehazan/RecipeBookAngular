import { Component, OnInit } from '@angular/core';
import{Recipe}from '../../models/recipe.model';
import{recipeService}from '../../services/recipe.service';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[];
  constructor(private recipeService:recipeService) { }

  ngOnInit() {
      this.recipes=this.recipeService.recipes;
  }

}
