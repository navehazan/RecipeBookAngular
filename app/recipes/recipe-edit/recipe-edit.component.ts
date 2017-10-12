import { Component, OnInit } from '@angular/core';
import{ActivatedRoute,Params,Router}from '@angular/router';
import { FormGroup,FormControl,FormArray,Validators } from '@angular/forms';
import{Recipe} from '../../models/recipe.model';
import { recipeService } from '../../services/recipe.service';
@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
id:number;
editMode=false;
myform:FormGroup;    
recipe:Recipe;    
  constructor(private ActivatedRoute:ActivatedRoute,private recipeService:recipeService,private Router:Router) { }

  ngOnInit() {
      this.ActivatedRoute.params.subscribe((params:Params)=>{
      this.id=params["id"]
      this.editMode= params["id"]!=null
      this.recipe=this.recipeService.recipeSelected(this.id)
      this.initForm()    
    });
       
    }
initForm(){
    let name="";
    let imagePath="";
    let description="";
    let ingridiants=new FormArray([]);
    if(this.editMode){
     name=this.recipe.name   
     imagePath=this.recipe.imagePath   
     description=this.recipe.description
        if(this.recipe.ingridiants){
            for(let ingridiant of this.recipe.ingridiants){
             ingridiants.push(new FormGroup({
                 "name":new FormControl(ingridiant.name,Validators.required),
                 "amount":new FormControl(ingridiant.amount,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
             }))   
            }
        }
    }
    this.myform=new FormGroup({
     "name":new FormControl(name,Validators.required),   
     "imagePath":new FormControl(imagePath,Validators.required),   
     "description":new FormControl(description,Validators.required),
    "ingridiants":ingridiants
    })
}
  getIngridiants(myform){
    return myform.get('ingridiants').controls
  }    
onSubmit(){
this.recipe=this.myform.value
if(this.editMode){
 this.recipeService.onRecipeEdit(this.id,this.recipe)
 this.editMode=false;   
}else{
 this.recipeService.onRecipeAdd(this.recipe)   
}
    this.Router.navigate(["/recipes"])
}
 removeIngridiant(index:number){
  (<FormArray>this.myform.get('ingridiants')).removeAt(index)  
 }   
 addIngridiant(){
  (<FormArray>this.myform.get('ingridiants')).push(
      new FormGroup({
         "name":new FormControl(null,Validators.required),               "amount":new FormControl(null,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
                        })
  )}  
}
