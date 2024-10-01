import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';

import { MatCardModule } from '@angular/material/card';

export const MaterialComponents: any = [
  MatButtonModule,
  MatIconModule,
  MatGridListModule,
  MatCardModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, MaterialComponents],
  exports: [MaterialComponents],
})
export class MaterialModule {}
