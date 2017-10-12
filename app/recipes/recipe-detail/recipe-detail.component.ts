import { Component, OnInit } from '@angular/core';
import{Recipe} from '../../models/recipe.model';
import { shoppingListService } from '../../services/shopping-list.service';
import{ActivatedRoute,Params,Router}from '@angular/router';
import { recipeService } from '../../services/recipe.service';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
 recipe:Recipe;
 id:number;
  constructor(
    private shoppingListService:shoppingListService,
    private recipeService:recipeService,
    private ActivatedRoute:ActivatedRoute,
     private Router:Router
     ) { }
    
addToshoppingList(){
 this.shoppingListService.addToshopingList(this.recipe.ingridiants)   
}
  ngOnInit() {
  this.ActivatedRoute.params.subscribe((params:Params)=>{
   this.id=+params["id"]      
   this.recipe=this.recipeService.recipeSelected(this.id)  
  })
  }
  deleteRecipe(){
      this.recipeService.onRecipeDelete(this.id);
      this.Router.navigate(["/recipes"])
  }  

}
