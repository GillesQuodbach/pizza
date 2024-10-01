import { Component } from '@angular/core';
import { MaterialComponents } from '../../material/material.module';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [MaterialComponents],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
})
export class GalleryComponent {}
