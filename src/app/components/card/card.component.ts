import { Component } from '@angular/core';
import { MaterialComponents } from '../../material/material.module';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MaterialComponents],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {}
