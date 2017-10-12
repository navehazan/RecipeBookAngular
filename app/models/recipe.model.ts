import {Ingridiant}from'./ingridiant.model';
export class Recipe{
public name:string;
public description:string;
public imagePath:string;
public ingridiants:Ingridiant[];    
    constructor( name:string,desc:string,image:string,ingridiants:Ingridiant[]){
        this.name=name;
        this.description=desc;
        this.imagePath=image;
        this.ingridiants=ingridiants;
    }
}