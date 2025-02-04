import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  private foods = [
    {
      id: 1,
      name: 'Burger',
      price: 120,
      image: '../../../assets/images/burger.jpg',
    },
    {
      id: 2,
      name: 'Pizza',
      price: 250,
      image: '../../../assets/images/pizza.jpg',
    },
    {
      id: 3,
      name: 'Lasagna',
      price: 180,
      image: '../../../assets/images/lasagna.jpg',
    },
    {
      id: 4,
      name: 'Spaghetti',
      price: 150,
      image: '../../../assets/images/spag.jpg',
    },
    {
      id: 5,
      name: 'Carbonara',
      price: 160,
      image: '../../../assets/images/carbonara.jpg',
    },
  ];

  getFoods(): { id: number; name: string; price: number; image: string }[] {
    return this.foods;
  }
}
