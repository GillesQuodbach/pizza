import { PizzaService } from './../../services/pizza.service';
import { Component, OnInit } from '@angular/core';
import { MaterialComponents } from '../../material/material.module';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MaterialComponents, CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent implements OnInit {
  pizzas: any[] = [];

  constructor(private pizzaService: PizzaService) {}

  ngOnInit(): void {
    this.pizzas = this.pizzaService.getPizzas().pizzas;
  }
}
