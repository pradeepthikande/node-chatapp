import { Injectable } from '@angular/core';
import{ Ingredient} from './shop.interface';
@Injectable({
  providedIn: 'root'
})
export class IngredientService {
name:string="";
amount:string="";

// goals=[{}];


goals: Ingredient[] = [
   new Ingredient('Apples', 5), 
   new Ingredient('Tomatoes', 10)
 ];
add(name,amount){
 let a= new Ingredient(name,amount)
  this.goals.push(a);
  this.name='';
  this.amount='';
 
  return this.goals;
}
get(name,amount){
  let a = new Ingredient(name,amount);
  this.goals.splice(0,1,a);
  
}
  constructor() { }
}
