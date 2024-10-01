import { Component } from '@angular/core';
import { MaterialComponents } from '../../material/material.module';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MaterialComponents],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
