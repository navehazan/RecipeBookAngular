import { Component, OnInit,ViewChild,OnDestroy} from '@angular/core';
import { NgForm } from '@angular/forms';
import{Subscription}from 'rxjs/Subscription';
import {Ingridiant}from'../../models/ingridiant.model';
import { shoppingListService } from '../../services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {
@ViewChild("f") myForm:NgForm; 
  subscription:Subscription
  constructor(private shoppingListService:shoppingListService) {}
  editMode=false;
  editedItemIndex:number;
  editItem:Ingridiant;
  ngOnInit() {
  this.subscription=this.shoppingListService.ingridiantSelect.subscribe((index:number)=>{
  this.editMode=true;
  this.editedItemIndex=index;
  this.editItem=this.shoppingListService.onEditItem(index)
  this.myForm.setValue({
      name:this.editItem.name,amount:this.editItem.amount})
  })}
  ngOnDestroy(){
   this.subscription.unsubscribe()     
    }
onSubmit(){
 const value=this.myForm.value;
 const  newIngridiand=new Ingridiant(value.name,value.amount) 
 if(this.editMode){
        this.shoppingListService.
        updateIngridiant(newIngridiand,this.editedItemIndex);
        this.editMode=false;
        this.myForm.reset()
    }else{
        this.shoppingListService.addIngridiant(newIngridiand);
        this.myForm.reset()
    }
 
}
   onDelete(){
    this.shoppingListService.onDeleteItem(this.editedItemIndex)   
    this.onClear()
 } 
    onClear(){
     this.editMode=false;   
     this.myForm.reset()   
    }
}
