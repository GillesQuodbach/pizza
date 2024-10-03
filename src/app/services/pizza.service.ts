import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PizzaService {
  getPizzas() {
    return this.pizzas;
  }

  pizzas = {
    pizzas: [
      {
        category: 'Les Classiques',
        items: [
          {
            name: 'Margherita',
            ingredients:
              "Sauce tomate, mozzarella, basilic frais, huile d'olive",
            price: 8.5,
          },
          {
            name: 'Reine',
            ingredients: 'Sauce tomate, mozzarella, jambon, champignons',
            price: 9.5,
          },
          {
            name: 'Napolitaine',
            ingredients:
              'Sauce tomate, mozzarella, anchois, câpres, olives noires',
            price: 9.0,
          },
        ],
      },
      {
        category: 'Les Gourmandes',
        items: [
          {
            name: '4 Fromages',
            ingredients:
              'Sauce tomate, mozzarella, gorgonzola, chèvre, parmesan',
            price: 11.0,
          },
          {
            name: 'Carnivore',
            ingredients:
              'Sauce tomate, mozzarella, jambon, chorizo, lardons, bœuf haché',
            price: 12.5,
          },
          {
            name: 'Calzone',
            ingredients:
              'Mozzarella, jambon, œuf, champignons, sauce tomate (pizza pliée)',
            price: 10.5,
          },
        ],
      },
      {
        category: 'Les Exotiques',
        items: [
          {
            name: 'Hawaïenne',
            ingredients: 'Sauce tomate, mozzarella, jambon, ananas',
            price: 10.0,
          },
          {
            name: 'Mexicaine',
            ingredients:
              'Sauce tomate, mozzarella, bœuf épicé, poivrons, piments, oignons rouges',
            price: 11.5,
          },
          {
            name: 'Orientale',
            ingredients: 'Sauce tomate, mozzarella, merguez, poivrons, œuf',
            price: 11.0,
          },
        ],
      },
      {
        category: 'Les Véganes',
        items: [
          {
            name: 'Veggie Delight',
            ingredients:
              'Sauce tomate, légumes grillés (courgettes, aubergines, poivrons), olives, roquette',
            price: 10.5,
          },
          {
            name: 'Pesto Veggie',
            ingredients:
              'Pesto, tomates cerises, roquette, champignons, noix de cajou',
            price: 11.0,
          },
        ],
      },
      {
        category: 'Les Spéciales',
        items: [
          {
            name: 'Truffe et Champignons',
            ingredients: 'Crème de truffe, mozzarella, champignons, roquette',
            price: 13.5,
          },
          {
            name: 'Saumon Fumé',
            ingredients:
              'Crème fraîche, mozzarella, saumon fumé, citron, aneth',
            price: 14.0,
          },
        ],
      },
    ],
    supplements: {
      fromage: {
        name: 'Supplément fromage',
        price: 1.5,
      },
      viande: {
        name: 'Supplément viande',
        price: 2.0,
      },
      legumes: {
        name: 'Supplément légumes',
        price: 1.0,
      },
    },
  };
}
