import { Component, OnInit,Input} from '@angular/core';
import{Recipe} from '../../../models/recipe.model';
import{recipeService}from '../../../services/recipe.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
@Input() recipe:Recipe;
@Input() index;
    
constructor(private router:Router) { }
  
 ngOnInit() {
  }

}
