import{Ingridiant}from '../models/ingridiant.model';
import{Subject}from 'rxjs/Subject';
export class shoppingListService{
ingridiants:Ingridiant[]=[
    new Ingridiant("eggs",4),new Ingridiant("potatos",8)
]; 
ingridiantSelect=new Subject<number>()     
 addIngridiant(ingridiant:Ingridiant){
   this.ingridiants.push(ingridiant)  
 }
 updateIngridiant(ingridiant:Ingridiant,index:number){
   this.ingridiants[index]=ingridiant  
 }    
addToshopingList(ingridiants:Ingridiant[]){
this.ingridiants.push(...ingridiants)   
}
onEditItem(index:number){
    return this.ingridiants[index]
}
onDeleteItem(index:number){
this.ingridiants.splice(index,1)    
}    
}