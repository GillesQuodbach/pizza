import { Component } from '@angular/core';
import { MaterialComponents } from '../../material/material.module';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MaterialComponents],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  scrollToSection(sectionId: string): void {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
