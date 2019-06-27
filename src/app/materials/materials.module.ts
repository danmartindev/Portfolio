import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  exports:[
    BrowserAnimationsModule,
    MatButtonModule,
    MatExpansionModule,
    MatTabsModule,
    MatToolbarModule,
  ]
})
export class MaterialsModule { }
