import { MaterialComponents } from './../../material/material.module';
import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MaterialComponents],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
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
