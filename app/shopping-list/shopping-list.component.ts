import { Component, OnInit } from '@angular/core';
import { shoppingListService } from '../services/shopping-list.service';
import{Ingridiant}from '../models/ingridiant.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
ingridiants:Ingridiant[];   
  constructor(private shoppingListService:shoppingListService) { }
editIngridiant(index:number){
  this.shoppingListService.ingridiantSelect.next(index)  
}
  ngOnInit() {
   this.ingridiants=this.shoppingListService.ingridiants;   
  }
}

