import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FoodComponent } from './food/food.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'food', component: FoodComponent},
    {path: '', redirectTo: "/home", pathMatch: 'full'},
]; 
