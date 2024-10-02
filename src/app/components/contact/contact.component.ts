import { Component, inject } from '@angular/core';
import { MaterialComponents } from '../../material/material.module';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialog } from '@angular/material/dialog';
import { FormComponent } from '../form/form.component';
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

  readonly dialog = inject(MatDialog);

  openDialog() {
    const dialogRef = this.dialog.open(FormComponent);

    // affiche quel component a fermé la modal
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
