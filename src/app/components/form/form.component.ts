import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { MaterialComponents } from '../../material/material.module';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { merge } from 'rxjs';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [MaterialComponents, FormsModule, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  readonly email = new FormControl('', [Validators.required, Validators.email]);
  readonly firstname = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  readonly textarea = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  errorMessage = signal('');
  constructor() {
    merge(
      this.email.statusChanges,
      this.email.valueChanges,
      this.firstname.statusChanges,
      this.firstname.valueChanges,
      this.textarea.statusChanges,
      this.textarea.valueChanges
    )
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());
  }
  updateErrorMessage() {
    if (this.email.hasError('required')) {
      this.errorMessage.set('You must enter a value');
    } else if (this.email.hasError('email')) {
      this.errorMessage.set('Not a valid email');
    } else {
      this.errorMessage.set('');
    }
    if (this.firstname.hasError('required')) {
      this.errorMessage.set('You must enter a value');
    } else if (this.firstname.hasError('email')) {
      this.errorMessage.set('Not a valid email');
    } else {
      this.errorMessage.set('');
    }
    if (this.textarea.hasError('required')) {
      this.errorMessage.set('You must enter a value');
    } else if (this.textarea.hasError('email')) {
      this.errorMessage.set('Not a valid email');
    } else {
      this.errorMessage.set('');
    }
  }
}
