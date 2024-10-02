import { Component } from '@angular/core';
import { MaterialComponents } from '../../material/material.module';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MaterialComponents],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      'facebook_icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl('facebook.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'instagram_icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl('instagram.svg')
    );
  }
}
