import { Component } from '@angular/core';
import { MaterialComponents } from '../../material/material.module';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [MaterialComponents],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {}
