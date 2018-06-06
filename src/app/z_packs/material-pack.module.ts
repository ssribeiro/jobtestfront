import { NgModule } from '@angular/core';

import {
  MatCommonModule,
  MatFormFieldModule,
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatInputModule,
  MatIconModule,
  MatToolbarModule,
  MatSidenavModule,
  MatChipsModule,
  MatTooltipModule,
  MatTabsModule,
  MatGridListModule,
  MatTableModule,
} from '@angular/material';

const modules = [
  MatCommonModule,
  MatFormFieldModule,
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatInputModule,
  MatIconModule,
  MatToolbarModule,
  MatSidenavModule,
  MatChipsModule,
  MatTooltipModule,
  MatTabsModule,
  MatGridListModule,
  MatTableModule,
];

@NgModule({
  imports: modules,
  exports: modules,
})

export class MaterialPackModule { }
