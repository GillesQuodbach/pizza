import { Component } from '@angular/core';
import { MaterialComponents } from '../../material/material.module';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MaterialComponents],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {}
