import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialComponents } from './material/material.module';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MaterialComponents, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'pizza';
}
