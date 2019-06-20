import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  exports:[
    BrowserAnimationsModule,
    MatTabsModule,
    MatToolbarModule,
  ]
})
export class MaterialsModule { }
