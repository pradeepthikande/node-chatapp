import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { ShoppinglisteditComponent } from './shoppinglist/shoppinglistedit/shoppinglistedit.component';
import { RecipelistComponent } from './recipes/recipelist/recipelist.component';
import { RecipedetailComponent } from './recipes/recipedetail/recipedetail.component';
import { RecipeitemComponent } from './recipes/recipelist/recipeitem/recipeitem.component';
import { Routes, RouterModule} from '@angular/router';
import { FormsModule} from '@angular/forms';
import{IngredientService} from './ingredient.service';
import{ Ingredient} from './shop.interface';
// import { ClickDirective } from './click.directive';
const routes: Routes = [
      { path: 'recipes', component:RecipesComponent ,
    children:[
      {path:'recipeDetails',component: RecipedetailComponent}
    ]  },
      { path: 'shoppinglist', component: ShoppinglistComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    ShoppinglistComponent,
    ShoppinglisteditComponent,
    RecipelistComponent,
    RecipedetailComponent,
    RecipeitemComponent
    // ClickDirective
  ],
  imports: [
    BrowserModule,
     FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [IngredientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
