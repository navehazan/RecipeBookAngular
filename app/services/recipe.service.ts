import{EventEmitter}from '@angular/core'; 
import{Recipe}from '../models/recipe.model';
import {Ingridiant}from'../models/ingridiant.model';
export class recipeService {
recipes:Recipe[]=[
    new Recipe("shakshuka",
               "the best breacfast","http://www.myjewishlearning.com/wp-content/uploads/2003/04/shakshuka-1598x900.jpg",
               [new Ingridiant("eggs",8),new Ingridiant("tomatos",4)]),
    new Recipe("shnizel",
               "the best for eavning","https://www.washingtonpost.com/rf/image_982w/2010-2019/WashingtonPost/2016/10/12/Food/Images/PorkSchnitzel-93591476292525.jpg",
              [new Ingridiant("meat",2),new Ingridiant("oil",1)])
];    
 recipeSelected(id:number){
  return this.recipes[id]  
}
onRecipeEdit(index:number,recipe:Recipe){
 this.recipes[index]=recipe   
}
onRecipeAdd(recipe:Recipe){
 this.recipes.push(recipe)   
}
onRecipeDelete(id:number){
this.recipes.splice(id,1)    
}    
}
