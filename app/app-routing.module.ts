import { NgModule } from '@angular/core';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { Routes,RouterModule } from '@angular/router';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
const appRoutes:Routes=[
    {path:"recipes",component:RecipesComponent,children:[
        {path:"",component:RecipeStartComponent},
        {path:"new",component:RecipeEditComponent},
        {path:":id",component:RecipeDetailComponent},
        {path:":id/edit",component:RecipeEditComponent}
        
        
    ]},
    {path:"",redirectTo:"/recipes",pathMatch:"full"},
    {path:"shopping-list",component:ShoppingListComponent}
    
];
@NgModule({
 imports:[
  RouterModule.forRoot(appRoutes,{useHash:true})   
 ],exports:[RouterModule]   
})
export class appRoutingModule{
    
}