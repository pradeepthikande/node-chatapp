import { Component, OnInit } from '@angular/core';
import{ IngredientService} from '../ingredient.service';

// import{IngredientService} from '../ingredient.service';
@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit {
name:string="";
amount:string="";
goals=[];


add(){
  this.goals=this.ingredient.add(this.name,this.amount);
  console.log(this.goals);
}
get(){
  this.ingredient.get(this.name,this.amount);
}

// goals;
// name;
// amount;

  constructor(private ingredient:IngredientService) { }

  ngOnInit() {
   
  }

 }

