import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialComponents } from './material/material.module';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AproposComponent } from './components/apropos/apropos.component';
import { GalleryComponent } from './components/gallery/gallery.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MaterialComponents,
    HeaderComponent,
    HomeComponent,
    AproposComponent,
    GalleryComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'pizza';
}
