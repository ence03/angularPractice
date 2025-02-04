import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  private foods = [
    '../../../assets/images/burger.jpg',
    '../../../assets/images/pizza.jpg',
    '../../../assets/images/lasagna.jpg',
    '../../../assets/images/spag.jpg',
    '../../../assets/images/carbonara.jpg',
  ];

  getFoods(): string[] {
    return this.foods;
  }
}
