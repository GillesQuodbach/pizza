import { Component, inject } from '@angular/core';
import { MaterialComponents } from '../../material/material.module';
import {
  MatBottomSheet,
  MatBottomSheetModule,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { ContactComponent } from '../contact/contact.component';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MaterialComponents, MatBottomSheetModule, MatBottomSheetModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  scrollToSection(sectionId: string): void {
    const section = document.getElementById(sectionId);
    const offset = 80;
    if (section) {
      const sectionPosition =
        section.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: sectionPosition - offset,
        behavior: 'smooth',
      });
    }
  }

  private _bottomSheet = inject(MatBottomSheet);

  openBottomSheet(): void {
    this._bottomSheet.open(ContactComponent);
  }
}
