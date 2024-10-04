import { PizzaService } from './../../services/pizza.service';
import { Component, HostListener, OnInit } from '@angular/core';
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

  gridCols: any;
  tileHeight: string;

  constructor(private pizzaService: PizzaService) {
    this.setGridCols();
    this.tileHeight = '2.6:1';
  }

  ngOnInit(): void {
    this.pizzas = this.pizzaService.getPizzas().pizzas;
  }

  setGridCols() {
    const width = window.innerWidth;

    if (width >= 1390) {
      this.gridCols = 2;
      this.tileHeight = '2:1';
    } else if (width >= 1170) {
      this.gridCols = 2;
      this.tileHeight = '1.5:1';
    } else if (width >= 725) {
      this.gridCols = 1;
      this.tileHeight = '350px';
    } else if (width >= 650) {
      this.gridCols = 1;
      this.tileHeight = '400px';
    } else {
      this.gridCols = 1;
      this.tileHeight = '400px';
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.setGridCols();
  }
}
